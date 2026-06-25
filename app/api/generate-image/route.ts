import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { image_idea } = await request.json();

    if (!image_idea) {
      return NextResponse.json({ error: 'Image idea is required' }, { status: 400 });
    }

    // Instead of generating bad AI images, return a Canva search URL
    // and curated Unsplash images that are appropriate for anti-trafficking awareness
    const searchQuery = encodeURIComponent('human rights awareness empowerment community');
    
    const unsplashImages = [
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1080&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=1080&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1080&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1080&h=1080&fit=crop',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1080&h=1080&fit=crop',
    ];

    // Pick a random appropriate image
    const randomImage = unsplashImages[Math.floor(Math.random() * unsplashImages.length)];

    const canvaUrl = `https://www.canva.com/create/social-media-graphics/?query=${encodeURIComponent('human trafficking awareness')}`;

    return NextResponse.json({
      success: true,
      imageUrl: randomImage,
      canvaUrl: canvaUrl,
      image_idea: image_idea,
      note: 'Using curated human rights imagery. For custom designs, use Canva.'
    });

  } catch (error) {
    console.error('Image generation error:', error);
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 });
  }
}
