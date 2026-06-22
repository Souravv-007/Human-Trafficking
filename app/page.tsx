"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";
import AIAssistantPanel from "@/components/ai-assistant-panel";
import ContentPanel from "@/components/content-panel";

const SocialMediaGenerator = dynamic(
  () => import("@/components/social-media-generator"),
  { ssr: false }
);

export default function Home() {
  const generatorRef = useRef<HTMLDivElement>(null);

  const scrollToGenerator = () => {
    generatorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm text-purple-300">AI-Powered Awareness Platform</span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient-primary">End Human Trafficking</span>
            <br />
            <span className="text-white">Through Awareness</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SafeRouteHub empowers individuals and organizations to create impactful awareness content,
            understand warning signs, and join the global movement against human trafficking.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <div className="min-h-[600px]">
            <AIAssistantPanel onGenerateClick={scrollToGenerator} />
          </div>
          <ContentPanel />
        </div>

        <div ref={generatorRef} className="min-h-[700px]">
          <SocialMediaGenerator />
        </div>
      </section>

      <section className="border-t border-border/50 mt-12 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border-gradient text-center"
            >
              <div className="w-12 h-12 rounded-xl gradient-purple-orange mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Prevention First</h3>
              <p className="text-sm text-muted-foreground">
                Education and early intervention to stop trafficking before it starts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-xl p-6 border-gradient text-center"
            >
              <div className="w-12 h-12 rounded-xl gradient-purple-orange mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💜</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Survivor-Centered</h3>
              <p className="text-sm text-muted-foreground">
                Every story is treated with dignity, respect, and trauma-informed care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-xl p-6 border-gradient text-center"
            >
              <div className="w-12 h-12 rounded-xl gradient-purple-orange mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Community Powered</h3>
              <p className="text-sm text-muted-foreground">
                Join a global network of advocates working to end trafficking.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
