/* Pinata IPFS integration (supports JWT or API Key/Secret)
   Usage:
     import { pinJSON, pinFile, gatewayUrl } from './pinata';
*/

export type PinResult = {
  cid: string;
  url: string;
  raw: any;
};

const PINATA_JWT = import.meta.env.VITE_PINATA_JWT as string | undefined;
const PINATA_API_KEY = import.meta.env.VITE_PINATA_API_KEY as string | undefined;
const PINATA_API_SECRET = import.meta.env.VITE_PINATA_API_SECRET as string | undefined;

const PINATA_BASE_URL = 'https://api.pinata.cloud';

function buildAuthHeaders(): HeadersInit {
  const headers: HeadersInit = {};
  if (PINATA_JWT) {
    headers['Authorization'] = `Bearer ${PINATA_JWT}`;
    return headers;
  }
  if (PINATA_API_KEY && PINATA_API_SECRET) {
    headers['pinata_api_key'] = PINATA_API_KEY;
    headers['pinata_secret_api_key'] = PINATA_API_SECRET;
    return headers;
  }
  throw new Error('Pinata credentials are not configured. Set VITE_PINATA_JWT or VITE_PINATA_API_KEY/VITE_PINATA_API_SECRET.');
}

function extractCid(resp: any): string {
  return resp?.IpfsHash || resp?.cid || resp?.Hash || resp?.ipfsHash;
}

export function gatewayUrl(cid: string, path?: string) {
  const clean = cid.replace(/^ipfs:\/\//, '').replace(/^\/ipfs\//, '');
  const suffix = path ? `/${path.replace(/^\//, '')}` : '';
  // Default Pinata public gateway; change if you use a custom gateway
  return `https://gateway.pinata.cloud/ipfs/${clean}${suffix}`;
}

export async function pinJSON(data: unknown, opts?: { name?: string; metadata?: Record<string, any> }): Promise<PinResult> {
  const url = `${PINATA_BASE_URL}/pinning/pinJSONToIPFS`;
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...buildAuthHeaders(),
  };

  const body = {
    pinataMetadata: {
      name: opts?.name || 'app-json',
      ...(opts?.metadata || {}),
    },
    pinataContent: data,
  };

  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Pinata pinJSON failed: ${res.status} ${res.statusText} - ${text}`);
  }
  const json = await res.json();
  const cid = extractCid(json);
  return { cid, url: gatewayUrl(cid), raw: json };
}

export async function pinFile(file: File, opts?: { name?: string; metadata?: Record<string, any> }): Promise<PinResult> {
  const url = `${PINATA_BASE_URL}/pinning/pinFileToIPFS`;
  const headers = buildAuthHeaders();

  const form = new FormData();
  form.append('file', file, file.name);

  const metadata = {
    name: opts?.name || file.name || 'upload',
    ...(opts?.metadata || {}),
  };
  form.append('pinataMetadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));

  const res = await fetch(url, {
    method: 'POST',
    headers, // Do not set Content-Type; browser will set multipart boundary
    body: form,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Pinata pinFile failed: ${res.status} ${res.statusText} - ${text}`);
  }
  const json = await res.json();
  const cid = extractCid(json);
  return { cid, url: gatewayUrl(cid), raw: json };
}
