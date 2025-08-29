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
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      ai_content: {
        Row: {
          content_id: string | null
          content_type: string
          created_at: string
          generated_content: Json
          id: string
          language: string | null
          title: string | null
          user_id: string
        }
        Insert: {
          content_id?: string | null
          content_type: string
          created_at?: string
          generated_content: Json
          id?: string
          language?: string | null
          title?: string | null
          user_id: string
        }
        Update: {
          content_id?: string | null
          content_type?: string
          created_at?: string
          generated_content?: Json
          id?: string
          language?: string | null
          title?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_content_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: false
            referencedRelation: "uploaded_content"
            referencedColumns: ["id"]
          },
        ]
      }
      badges: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          icon_url: string | null
          id: string
          name: string
          rarity: string | null
          requirement_type: string | null
          requirement_value: number | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          icon_url?: string | null
          id?: string
          name: string
          rarity?: string | null
          requirement_type?: string | null
          requirement_value?: number | null
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          icon_url?: string | null
          id?: string
          name?: string
          rarity?: string | null
          requirement_type?: string | null
          requirement_value?: number | null
        }
        Relationships: []
      }
      milestones: {
        Row: {
          badge_id: string | null
          created_at: string
          crystal_reward: number | null
          description: string | null
          id: string
          milestone_type: string | null
          target_value: number | null
          title: string
          xp_reward: number | null
        }
        Insert: {
          badge_id?: string | null
          created_at?: string
          crystal_reward?: number | null
          description?: string | null
          id?: string
          milestone_type?: string | null
          target_value?: number | null
          title: string
          xp_reward?: number | null
        }
        Update: {
          badge_id?: string | null
          created_at?: string
          crystal_reward?: number | null
          description?: string | null
          id?: string
          milestone_type?: string | null
          target_value?: number | null
          title?: string
          xp_reward?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "milestones_badge_id_fkey"
            columns: ["badge_id"]
            isOneToOne: false
            referencedRelation: "badges"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          crystals: number | null
          current_streak: number | null
          display_name: string | null
          id: string
          last_activity_date: string | null
          level: number | null
          longest_streak: number | null
          total_study_time: number | null
          updated_at: string
          user_id: string
          username: string | null
          xp: number | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          crystals?: number | null
          current_streak?: number | null
          display_name?: string | null
          id?: string
          last_activity_date?: string | null
          level?: number | null
          longest_streak?: number | null
          total_study_time?: number | null
          updated_at?: string
          user_id: string
          username?: string | null
          xp?: number | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          crystals?: number | null
          current_streak?: number | null
          display_name?: string | null
          id?: string
          last_activity_date?: string | null
          level?: number | null
          longest_streak?: number | null
          total_study_time?: number | null
          updated_at?: string
          user_id?: string
          username?: string | null
          xp?: number | null
        }
        Relationships: []
      }
      quests: {
        Row: {
          created_at: string
          crystal_reward: number | null
          description: string | null
          difficulty: string | null
          expires_at: string | null
          id: string
          is_active: boolean | null
          requirement_type: string | null
          requirement_value: number | null
          title: string
          type: string
          xp_reward: number | null
        }
        Insert: {
          created_at?: string
          crystal_reward?: number | null
          description?: string | null
          difficulty?: string | null
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          requirement_type?: string | null
          requirement_value?: number | null
          title: string
          type: string
          xp_reward?: number | null
        }
        Update: {
          created_at?: string
          crystal_reward?: number | null
          description?: string | null
          difficulty?: string | null
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          requirement_type?: string | null
          requirement_value?: number | null
          title?: string
          type?: string
          xp_reward?: number | null
        }
        Relationships: []
      }
      study_sessions: {
        Row: {
          content_id: string | null
          correct_answers: number | null
          duration_minutes: number | null
          ended_at: string | null
          id: string
          questions_answered: number | null
          session_type: string | null
          started_at: string
          subject_id: string | null
          user_id: string
          xp_earned: number | null
        }
        Insert: {
          content_id?: string | null
          correct_answers?: number | null
          duration_minutes?: number | null
          ended_at?: string | null
          id?: string
          questions_answered?: number | null
          session_type?: string | null
          started_at?: string
          subject_id?: string | null
          user_id: string
          xp_earned?: number | null
        }
        Update: {
          content_id?: string | null
          correct_answers?: number | null
          duration_minutes?: number | null
          ended_at?: string | null
          id?: string
          questions_answered?: number | null
          session_type?: string | null
          started_at?: string
          subject_id?: string | null
          user_id?: string
          xp_earned?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "study_sessions_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: false
            referencedRelation: "uploaded_content"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "study_sessions_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      subjects: {
        Row: {
          color: string | null
          created_at: string
          description: string | null
          icon_url: string | null
          id: string
          is_unlocked_by_default: boolean | null
          name: string
          unlock_xp_requirement: number | null
        }
        Insert: {
          color?: string | null
          created_at?: string
          description?: string | null
          icon_url?: string | null
          id?: string
          is_unlocked_by_default?: boolean | null
          name: string
          unlock_xp_requirement?: number | null
        }
        Update: {
          color?: string | null
          created_at?: string
          description?: string | null
          icon_url?: string | null
          id?: string
          is_unlocked_by_default?: boolean | null
          name?: string
          unlock_xp_requirement?: number | null
        }
        Relationships: []
      }
      uploaded_content: {
        Row: {
          created_at: string
          extracted_text: string | null
          file_size: number | null
          file_type: string
          filename: string
          id: string
          is_processed: boolean | null
          original_filename: string
          storage_path: string
          subject_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          extracted_text?: string | null
          file_size?: number | null
          file_type: string
          filename: string
          id?: string
          is_processed?: boolean | null
          original_filename: string
          storage_path: string
          subject_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          extracted_text?: string | null
          file_size?: number | null
          file_type?: string
          filename?: string
          id?: string
          is_processed?: boolean | null
          original_filename?: string
          storage_path?: string
          subject_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "uploaded_content_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      user_badges: {
        Row: {
          badge_id: string
          earned_at: string
          id: string
          user_id: string
        }
        Insert: {
          badge_id: string
          earned_at?: string
          id?: string
          user_id: string
        }
        Update: {
          badge_id?: string
          earned_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_badges_badge_id_fkey"
            columns: ["badge_id"]
            isOneToOne: false
            referencedRelation: "badges"
            referencedColumns: ["id"]
          },
        ]
      }
      user_milestones: {
        Row: {
          completed_at: string
          id: string
          milestone_id: string
          user_id: string
        }
        Insert: {
          completed_at?: string
          id?: string
          milestone_id: string
          user_id: string
        }
        Update: {
          completed_at?: string
          id?: string
          milestone_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_milestones_milestone_id_fkey"
            columns: ["milestone_id"]
            isOneToOne: false
            referencedRelation: "milestones"
            referencedColumns: ["id"]
          },
        ]
      }
      user_quests: {
        Row: {
          claimed_at: string | null
          completed_at: string | null
          created_at: string
          id: string
          is_completed: boolean | null
          progress: number | null
          quest_id: string
          user_id: string
        }
        Insert: {
          claimed_at?: string | null
          completed_at?: string | null
          created_at?: string
          id?: string
          is_completed?: boolean | null
          progress?: number | null
          quest_id: string
          user_id: string
        }
        Update: {
          claimed_at?: string | null
          completed_at?: string | null
          created_at?: string
          id?: string
          is_completed?: boolean | null
          progress?: number | null
          quest_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_quests_quest_id_fkey"
            columns: ["quest_id"]
            isOneToOne: false
            referencedRelation: "quests"
            referencedColumns: ["id"]
          },
        ]
      }
      user_subjects: {
        Row: {
          id: string
          progress_percentage: number | null
          subject_id: string
          unlocked_at: string
          user_id: string
        }
        Insert: {
          id?: string
          progress_percentage?: number | null
          subject_id: string
          unlocked_at?: string
          user_id: string
        }
        Update: {
          id?: string
          progress_percentage?: number | null
          subject_id?: string
          unlocked_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_subjects_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
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
      [_ in never]: never
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
    Enums: {},
  },
} as const
