"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Sparkles,
  Copy,
  Save,
  Download,
  RefreshCw,
  Check,
  Loader2,
  Hash,
  Image,
  Share2,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const platforms = [
  { value: "Instagram", label: "Instagram", color: "bg-gradient-to-br from-purple-500 to-pink-500" },
  { value: "Twitter/X", label: "Twitter/X", color: "bg-black" },
  { value: "LinkedIn", label: "LinkedIn", color: "bg-blue-600" },
  { value: "Facebook", label: "Facebook", color: "bg-blue-500" },
];

const tones = [
  { value: "Educational", label: "Educational", icon: "📚" },
  { value: "Urgent", label: "Urgent", icon: "🚨" },
  { value: "Emotional", label: "Emotional", icon: "💜" },
  { value: "Survivor-focused", label: "Survivor-focused", icon: "🕊️" },
  { value: "NGO-style", label: "NGO-style", icon: "🏛️" },
];

const topics = [
  { value: "Child trafficking", label: "Child Trafficking" },
  { value: "Labor trafficking", label: "Labor Trafficking" },
  { value: "Online grooming", label: "Online Grooming" },
  { value: "Scam recruitment", label: "Scam Recruitment" },
  { value: "Warning signs", label: "Warning Signs" },
  { value: "Missing children", label: "Missing Children" },
  { value: "Safe migration", label: "Safe Migration" },
];

interface GeneratedPost {
  hook: string;
  caption: string;
  cta: string;
  hashtags: string[];
  image_idea: string;
}

export default function SocialMediaGenerator() {
  const [platform, setPlatform] = useState("Instagram");
  const [tone, setTone] = useState("Educational");
  const [topic, setTopic] = useState("Warning signs");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPost, setGeneratedPost] = useState<GeneratedPost | null>(null);
  const [copied, setCopied] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [canvaUrl, setCanvaUrl] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  const generateImage = async (imageIdea: string) => {
    setImageLoading(true);
    setImageError(false);
    setGeneratedImage(null);
    setCanvaUrl(null);

    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image_idea: imageIdea }),
      });

      const data = await response.json();

      if (data.success) {
        setGeneratedImage(data.imageUrl);
        setCanvaUrl(data.canvaUrl);
        toast.success("Image ready!");
      } else {
        setImageError(true);
        toast.error("Image generation failed");
      }
    } catch {
      setImageError(true);
      toast.error("Failed to generate image");
    } finally {
      setImageLoading(false);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedPost(null);
    setGeneratedImage(null);
    setCanvaUrl(null);
    setImageError(false);

    try {
      const response = await fetch("/api/generate-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ platform, tone, topic }),
      });

      const data = await response.json();

      if (data.success) {
        setGeneratedPost(data.post);
        toast.success("Post generated successfully!");
        await generateImage(data.post.image_idea);
      } else {
        toast.error(data.error || "Failed to generate post");
      }
    } catch {
      toast.error("Failed to connect to AI service");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    if (!generatedPost) return;
    const text = `${generatedPost.hook}\n\n${generatedPost.caption}\n\n${generatedPost.cta}\n\n${generatedPost.hashtags.map(h => `#${h}`).join(" ")}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadImage = async () => {
    if (!generatedImage) return;
    try {
      const response = await fetch(generatedImage);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `awareness-post-${Date.now()}.jpg`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success("Image downloaded!");
    } catch {
      toast.error("Failed to download image");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-6 border-gradient h-full flex flex-col"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
          <Share2 className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Social Media Generator</h3>
          <p className="text-xs text-muted-foreground">AI-powered awareness content</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="text-sm font-medium text-white mb-2 block">Platform</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {platforms.map((p) => (
              <button
                key={p.value}
                onClick={() => setPlatform(p.value)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-all flex items-center gap-2 justify-center",
                  platform === p.value
                    ? "bg-gradient-to-r from-purple-500/30 to-orange-500/30 border border-purple-500 text-white"
                    : "bg-background/50 border border-border text-muted-foreground hover:border-purple-500/50 hover:text-white"
                )}
              >
                <div className={cn("w-3 h-3 rounded-full", p.color)} />
                <span className="hidden sm:inline">{p.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-white mb-2 block">Tone</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {tones.map((t) => (
              <button
                key={t.value}
                onClick={() => setTone(t.value)}
                className={cn(
                  "rounded-lg px-3 py-2 text-xs font-medium transition-all text-center",
                  tone === t.value
                    ? "bg-gradient-to-r from-purple-500/30 to-orange-500/30 border border-purple-500 text-white"
                    : "bg-background/50 border border-border text-muted-foreground hover:border-purple-500/50 hover:text-white"
                )}
              >
                <span className="mr-1">{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-white mb-2 block">Topic</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {topics.map((t) => (
              <button
                key={t.value}
                onClick={() => setTopic(t.value)}
                className={cn(
                  "rounded-lg px-3 py-2 text-xs font-medium transition-all text-left",
                  topic === t.value
                    ? "bg-gradient-to-r from-purple-500/30 to-orange-500/30 border border-purple-500 text-white"
                    : "bg-background/50 border border-border text-muted-foreground hover:border-purple-500/50 hover:text-white"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleGenerate}
        disabled={isGenerating}
        className="w-full rounded-xl p-4 gradient-primary text-white font-semibold flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-purple-500/25 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isGenerating ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5" />
            Generate Post
          </>
        )}
      </motion.button>

      <AnimatePresence mode="wait">
        {generatedPost && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="mt-6 glass-strong rounded-xl p-5 border border-purple-500/30 flex-1 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className={cn("w-8 h-8 rounded-lg", platforms.find(p => p.value === platform)?.color, "flex items-center justify-center")}>
                  <Share2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-white">{platform}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{topic}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-background/50 hover:bg-purple-500/20 border border-border hover:border-purple-500/50 transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                </button>
                <button className="p-2 rounded-lg bg-background/50 hover:bg-purple-500/20 border border-border hover:border-purple-500/50 transition-all">
                  <Save className="w-4 h-4 text-muted-foreground" />
                </button>
                <button
                  onClick={handleDownloadImage}
                  disabled={!generatedImage}
                  className="p-2 rounded-lg bg-background/50 hover:bg-purple-500/20 border border-border hover:border-purple-500/50 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Download className="w-4 h-4 text-muted-foreground" />
                </button>
                <button
                  onClick={handleGenerate}
                  className="p-2 rounded-lg bg-background/50 hover:bg-purple-500/20 border border-border hover:border-purple-500/50 transition-all"
                >
                  <RefreshCw className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>

            <div className="space-y-4 flex-1">
              <div>
                <p className="text-xs text-purple-400 font-medium uppercase tracking-wider mb-1">Hook</p>
                <p className="text-white font-medium text-lg">{generatedPost.hook}</p>
              </div>

              <div>
                <p className="text-xs text-orange-400 font-medium uppercase tracking-wider mb-1">Caption</p>
                <p className="text-muted-foreground leading-relaxed">{generatedPost.caption}</p>
              </div>

              <div>
                <p className="text-xs text-red-400 font-medium uppercase tracking-wider mb-1">Call to Action</p>
                <p className="text-white font-medium">{generatedPost.cta}</p>
              </div>

              <div>
                <p className="text-xs text-pink-400 font-medium uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Hash className="w-3 h-3" />
                  Hashtags
                </p>
                <div className="flex flex-wrap gap-2">
                  {generatedPost.hashtags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* IMAGE SECTION */}
              <div>
                <p className="text-xs text-cyan-400 font-medium uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Image className="w-3 h-3" />
                  Visual Content
                </p>

                <p className="text-xs text-muted-foreground italic mb-3">{generatedPost.image_idea}</p>

                <div className="relative rounded-xl overflow-hidden border border-cyan-500/20 bg-background/30 min-h-[200px] flex items-center justify-center">
                  {imageLoading && (
                    <div className="flex flex-col items-center gap-3 p-8">
                      <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
                      <p className="text-sm text-muted-foreground">Finding the right image...</p>
                    </div>
                  )}

                  {!imageLoading && imageError && (
                    <div className="flex flex-col items-center gap-3 p-8">
                      <Image className="w-8 h-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Could not load image</p>
                      <button
                        onClick={() => generateImage(generatedPost.image_idea)}
                        className="text-xs text-cyan-400 hover:text-cyan-300 underline"
                      >
                        Try again
                      </button>
                    </div>
                  )}

                  {!imageLoading && generatedImage && !imageError && (
                    <div className="w-full">
                      <img
                        src={generatedImage}
                        alt="Awareness campaign visual"
                        className="w-full rounded-xl object-cover"
                        onError={() => setImageError(true)}
                      />
                      <div className="absolute bottom-2 right-2 flex gap-2">
                        <button
                          onClick={() => generateImage(generatedPost.image_idea)}
                          className="p-1.5 rounded-lg bg-black/60 hover:bg-black/80 transition-all"
                          title="Refresh image"
                        >
                          <RefreshCw className="w-3 h-3 text-white" />
                        </button>
                        <button
                          onClick={handleDownloadImage}
                          className="p-1.5 rounded-lg bg-black/60 hover:bg-black/80 transition-all"
                          title="Download image"
                        >
                          <Download className="w-3 h-3 text-white" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Canva Button */}
                {canvaUrl && (
                  <a
                    href={canvaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    🎨 Customize this visual on Canva
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
