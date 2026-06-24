import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { image_idea } = await request.json();

    if (!image_idea) {
      return NextResponse.json({ error: 'Image idea is required' }, { status: 400 });
    }

    const encodedPrompt = encodeURIComponent(
      `${image_idea}. Style: professional awareness campaign, hopeful, empowering, clean background, no text, no words, social media ready`
    );

    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1080&height=1080&nologo=true&seed=${Date.now()}`;

    // Fetch the image server-side (no CORS issues)
    const imageResponse = await fetch(imageUrl);

    if (!imageResponse.ok) {
      return NextResponse.json({ error: 'Failed to fetch image' }, { status: 500 });
    }

    const imageBuffer = await imageResponse.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString('base64');

    return NextResponse.json({
      success: true,
      imageData: `data:image/jpeg;base64,${base64Image}`
    });

  } catch (error) {
    console.error('Image generation error:', error);
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 });
  }
}
