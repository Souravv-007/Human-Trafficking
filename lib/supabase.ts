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
