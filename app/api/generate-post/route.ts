import { NextRequest, NextResponse } from 'next/server';

interface GeneratedContent {
  hook: string;
  caption: string;
  cta: string;
  hashtags: string[];
  image_idea: string;
}

function parseGeneratedContent(text: string): GeneratedContent {
  const lines = text.split('\n').filter(line => line.trim());
  const result: GeneratedContent = {
    hook: '',
    caption: '',
    cta: '',
    hashtags: [],
    image_idea: ''
  };

  let currentKey: keyof GeneratedContent | null = null;

  for (const line of lines) {
    const hookMatch = line.match(/^HOOK:\s*(.+)$/i);
    const captionMatch = line.match(/^CAPTION:\s*(.+)$/i);
    const ctaMatch = line.match(/^CTA:\s*(.+)$/i);
    const hashtagsMatch = line.match(/^HASHTAGS:\s*(.+)$/i);
    const imageMatch = line.match(/^IMAGE IDEA:\s*(.+)$/i);

    if (hookMatch) {
      result.hook = hookMatch[1].trim();
      currentKey = 'hook';
    } else if (captionMatch) {
      result.caption = captionMatch[1].trim();
      currentKey = 'caption';
    } else if (ctaMatch) {
      result.cta = ctaMatch[1].trim();
      currentKey = 'cta';
    } else if (hashtagsMatch) {
      result.hashtags = hashtagsMatch[1].split(',').map(h => h.trim().replace('#', ''));
      currentKey = 'hashtags';
    } else if (imageMatch) {
      result.image_idea = imageMatch[1].trim();
      currentKey = 'image_idea';
    } else if (currentKey === 'caption' && line.trim()) {
      result.caption += ' ' + line.trim();
    }
  }

  if (!result.hook) result.hook = 'Breaking the silence on human trafficking';
  if (!result.caption) result.caption = 'Every voice matters in the fight against trafficking.';
  if (!result.cta) result.cta = 'Share to raise awareness.';
  if (result.hashtags.length === 0) result.hashtags = ['EndHumanTrafficking', 'SafeRouteHub', 'Awareness'];
  if (!result.image_idea) result.image_idea = 'Survivor empowerment imagery';

  return result;
}

export async function POST(request: NextRequest) {
  try {
    const { platform, tone, topic } = await request.json();

    if (!platform || !tone || !topic) {
      return NextResponse.json(
        { error: 'Platform, tone, and topic are required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenRouter API key not configured' },
        { status: 500 }
      );
    }

    const platformGuides: Record<string, string> = {
      'Instagram': 'Visual-focused, use emojis, 150-200 words, include carousel-style content suggestions',
      'Twitter/X': 'Short and punchy, under 280 characters for the main hook, thread-friendly',
      'LinkedIn': 'Professional tone, data-driven, focus on corporate responsibility and policy',
      'Facebook': 'Community-focused, story-driven, shareable format, engage families and parents'
    };

    const toneGuides: Record<string, string> = {
      'Educational': 'Informative, factual, teaching-focused, avoiding sensationalism',
      'Urgent': 'Action-oriented, time-sensitive language, calls for immediate awareness',
      'Emotional': 'Empathetic, heart-centered, connecting through shared humanity',
      'Survivor-focused': 'Centering survivor voices and experiences, empowerment over victimhood',
      'NGO-style': 'Professional, policy-oriented, suitable for organizational sharing'
    };

    const prompt = `Generate an anti-human trafficking awareness social media post for ${platform}.

Platform guidelines: ${platformGuides[platform] || 'Engaging and shareable'}
Tone: ${toneGuides[tone] || tone}
Topic: ${topic}

Requirements:
- Must be educational and trauma-informed
- Must be factually accurate
- Must be actionable
- Avoid sensationalism or graphic content
- Center survivor dignity and empowerment
- Include practical awareness steps
- Always end with: National Human Trafficking Hotline: 1-888-373-7888 | Text BeFree to 233733

Format your response EXACTLY as follows:
HOOK: [A compelling attention-grabber, one sentence]
CAPTION: [The main body text, 2-3 sentences]
CTA: [Clear call to action, one sentence]
HASHTAGS: [5-8 relevant hashtags separated by commas]
IMAGE IDEA: [Brief description of a suitable visual]

Generate the post now.`;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        'X-Title': process.env.NEXT_PUBLIC_SITE_NAME || 'SafeRouteHub',
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo', // Change this to any OpenRouter-supported model
        messages: [
          {
            role: 'system',
            content: 'You are an expert in trauma-informed, survivor-centered anti-trafficking awareness communication.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenRouter API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to generate content from OpenRouter API' },
        { status: 500 }
      );
    }

    const data = await response.json();
    const generatedText = data.choices?.[0]?.message?.content ?? '';

    if (!generatedText) {
      return NextResponse.json(
        { error: 'No content generated' },
        { status: 500 }
      );
    }

    const parsed = parseGeneratedContent(generatedText);

    return NextResponse.json({
      success: true,
      post: parsed
    });

  } catch (error) {
    console.error('Generate post error:', error);
    return NextResponse.json(
      { error: 'Failed to generate post. Please try again.' },
      { status: 500 }
    );
  }
}
