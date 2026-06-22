import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SafeRouteHub | Anti-Human Trafficking Awareness Platform',
  description: 'AI-powered platform dedicated to ending human trafficking through education, survivor stories, and awareness content generation.',
  keywords: ['human trafficking', 'anti-trafficking', 'awareness', 'survivor support', 'NGO', 'social impact'],
  openGraph: {
    title: 'SafeRouteHub',
    description: 'AI-powered platform for anti-human trafficking awareness',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background`}>
        <div className="relative min-h-screen">
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 -left-40 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-red-500/10 rounded-full blur-[100px]" />
          </div>
          <Navbar />
          <main className="relative">
            {children}
          </main>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
