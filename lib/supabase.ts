import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Database = {
  public: {
    Tables: {
      waiting_list: {
        Row: {
          id: number;
          email: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          email?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          email?: string | null;
          created_at?: string;
        };
      };
    };
  };
};