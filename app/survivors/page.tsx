"use client";

import { motion } from "framer-motion";
import { BookOpen, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const survivorStories = [
  {
    name: "Maya's Journey",
    excerpt: "From exploitation to empowerment - a story of resilience and hope",
    category: "Labor Trafficking",
    readTime: "8 min read"
  },
  {
    name: "Finding Light",
    excerpt: "How community support helped one survivor rebuild their life",
    category: "Survival Story",
    readTime: "6 min read"
  },
  {
    name: "Breaking the Silence",
    excerpt: "The power of speaking out and helping others find their voice",
    category: "Advocacy",
    readTime: "10 min read"
  }
];

export default function SurvivorsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-2xl gradient-purple-orange mx-auto mb-6 flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient-primary">Survivor Stories</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Powerful stories of resilience, recovery, and hope from survivors around the world.
          </p>
        </motion.div>

        <div className="space-y-6">
          {survivorStories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 border-gradient hover-lift cursor-pointer group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="text-xs text-orange-400 font-medium uppercase tracking-wider">
                    {story.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-purple-300 transition-colors">
                    {story.name}
                  </h3>
                  <p className="text-muted-foreground mt-2">{story.excerpt}</p>
                  <p className="text-xs text-muted-foreground mt-3">{story.readTime}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 glass rounded-xl p-6 border border-pink-500/30 text-center"
        >
          <Heart className="w-8 h-8 text-pink-400 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">Share Your Story</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Your voice matters. If you&apos;re a survivor and want to share your journey, we&apos;re here to amplify your message.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg gradient-primary text-white text-sm font-medium"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
