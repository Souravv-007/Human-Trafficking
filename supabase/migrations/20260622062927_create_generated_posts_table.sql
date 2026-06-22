CREATE TABLE generated_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  platform TEXT NOT NULL,
  tone TEXT NOT NULL,
  topic TEXT NOT NULL,
  hook TEXT NOT NULL,
  caption TEXT NOT NULL,
  cta TEXT NOT NULL,
  hashtags TEXT[] DEFAULT '{}',
  image_idea TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE generated_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_generated_posts" ON generated_posts FOR SELECT
  TO authenticated, anon USING (true);

CREATE POLICY "insert_generated_posts" ON generated_posts FOR INSERT
  TO authenticated, anon WITH CHECK (true);

CREATE INDEX idx_generated_posts_created_at ON generated_posts(created_at DESC);