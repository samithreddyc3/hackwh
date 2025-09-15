export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      analytics: {
        Row: {
          api_key_id: string | null
          chain_id: number | null
          created_at: string
          credits_consumed: number | null
          endpoint: string
          id: string
          ip_address: unknown | null
          metadata: Json | null
          method: string
          network_name: string | null
          project_id: string | null
          response_time_ms: number | null
          status_code: number | null
          user_agent: string | null
          user_id: string
        }
        Insert: {
          api_key_id?: string | null
          chain_id?: number | null
          created_at?: string
          credits_consumed?: number | null
          endpoint: string
          id?: string
          ip_address?: unknown | null
          metadata?: Json | null
          method: string
          network_name?: string | null
          project_id?: string | null
          response_time_ms?: number | null
          status_code?: number | null
          user_agent?: string | null
          user_id: string
        }
        Update: {
          api_key_id?: string | null
          chain_id?: number | null
          created_at?: string
          credits_consumed?: number | null
          endpoint?: string
          id?: string
          ip_address?: unknown | null
          metadata?: Json | null
          method?: string
          network_name?: string | null
          project_id?: string | null
          response_time_ms?: number | null
          status_code?: number | null
          user_agent?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "analytics_api_key_id_fkey"
            columns: ["api_key_id"]
            isOneToOne: false
            referencedRelation: "api_keys"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analytics_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      api_keys: {
        Row: {
          created_at: string
          id: string
          is_active: boolean | null
          key_hash: string
          key_prefix: string
          last_used_at: string | null
          name: string
          permissions: string[] | null
          project_id: string | null
          rate_limit_per_minute: number | null
          updated_at: string
          usage_count: number | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean | null
          key_hash: string
          key_prefix: string
          last_used_at?: string | null
          name: string
          permissions?: string[] | null
          project_id?: string | null
          rate_limit_per_minute?: number | null
          updated_at?: string
          usage_count?: number | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean | null
          key_hash?: string
          key_prefix?: string
          last_used_at?: string | null
          name?: string
          permissions?: string[] | null
          project_id?: string | null
          rate_limit_per_minute?: number | null
          updated_at?: string
          usage_count?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "api_keys_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          company: string | null
          created_at: string
          credits: number
          email: string
          full_name: string | null
          id: string
          monthly_usage: number
          status: Database["public"]["Enums"]["user_status"]
          tier: Database["public"]["Enums"]["user_tier"]
          updated_at: string
          user_id: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          credits?: number
          email: string
          full_name?: string | null
          id?: string
          monthly_usage?: number
          status?: Database["public"]["Enums"]["user_status"]
          tier?: Database["public"]["Enums"]["user_tier"]
          updated_at?: string
          user_id: string
        }
        Update: {
          company?: string | null
          created_at?: string
          credits?: number
          email?: string
          full_name?: string | null
          id?: string
          monthly_usage?: number
          status?: Database["public"]["Enums"]["user_status"]
          tier?: Database["public"]["Enums"]["user_tier"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          networks: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          networks?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          networks?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      smart_contracts: {
        Row: {
          abi: Json | null
          bytecode: string | null
          chain_id: number
          compiler_version: string | null
          contract_address: string | null
          contract_type: string
          created_at: string
          deployment_cost: string | null
          deployment_tx_hash: string | null
          gas_used: number | null
          id: string
          is_verified: boolean | null
          metadata: Json | null
          name: string
          network_name: string
          project_id: string | null
          source_code: string | null
          status: Database["public"]["Enums"]["contract_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          abi?: Json | null
          bytecode?: string | null
          chain_id: number
          compiler_version?: string | null
          contract_address?: string | null
          contract_type: string
          created_at?: string
          deployment_cost?: string | null
          deployment_tx_hash?: string | null
          gas_used?: number | null
          id?: string
          is_verified?: boolean | null
          metadata?: Json | null
          name: string
          network_name: string
          project_id?: string | null
          source_code?: string | null
          status?: Database["public"]["Enums"]["contract_status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          abi?: Json | null
          bytecode?: string | null
          chain_id?: number
          compiler_version?: string | null
          contract_address?: string | null
          contract_type?: string
          created_at?: string
          deployment_cost?: string | null
          deployment_tx_hash?: string | null
          gas_used?: number | null
          id?: string
          is_verified?: boolean | null
          metadata?: Json | null
          name?: string
          network_name?: string
          project_id?: string | null
          source_code?: string | null
          status?: Database["public"]["Enums"]["contract_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "smart_contracts_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions: {
        Row: {
          block_number: number | null
          chain_id: number
          created_at: string
          from_address: string | null
          gas_price: string | null
          gas_used: number | null
          id: string
          is_gasless: boolean | null
          metadata: Json | null
          network_name: string
          project_id: string | null
          status: Database["public"]["Enums"]["transaction_status"]
          to_address: string | null
          tx_hash: string
          updated_at: string
          user_id: string
          value: string | null
        }
        Insert: {
          block_number?: number | null
          chain_id: number
          created_at?: string
          from_address?: string | null
          gas_price?: string | null
          gas_used?: number | null
          id?: string
          is_gasless?: boolean | null
          metadata?: Json | null
          network_name: string
          project_id?: string | null
          status?: Database["public"]["Enums"]["transaction_status"]
          to_address?: string | null
          tx_hash: string
          updated_at?: string
          user_id: string
          value?: string | null
        }
        Update: {
          block_number?: number | null
          chain_id?: number
          created_at?: string
          from_address?: string | null
          gas_price?: string | null
          gas_used?: number | null
          id?: string
          is_gasless?: boolean | null
          metadata?: Json | null
          network_name?: string
          project_id?: string | null
          status?: Database["public"]["Enums"]["transaction_status"]
          to_address?: string | null
          tx_hash?: string
          updated_at?: string
          user_id?: string
          value?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      contract_status: "deploying" | "deployed" | "failed"
      transaction_status: "pending" | "confirmed" | "failed"
      user_status: "active" | "suspended" | "pending"
      user_tier: "developer" | "professional" | "enterprise"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      contract_status: ["deploying", "deployed", "failed"],
      transaction_status: ["pending", "confirmed", "failed"],
      user_status: ["active", "suspended", "pending"],
      user_tier: ["developer", "professional", "enterprise"],
    },
  },
} as const
