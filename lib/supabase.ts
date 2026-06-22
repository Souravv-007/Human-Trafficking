import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface GeneratedPost {
  id: string;
  platform: string;
  tone: string;
  topic: string;
  hook: string;
  caption: string;
  cta: string;
  hashtags: string[];
  image_idea: string | null;
  created_at: string;
}
