"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const SocialMediaGenerator = dynamic(
  () => import("@/components/social-media-generator"),
  { ssr: false }
);

export default function GeneratorPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient-primary">AI Post Generator</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Create impactful, trauma-informed social media content to raise awareness about human trafficking.
          </p>
        </motion.div>
        <SocialMediaGenerator />
      </div>
    </div>
  );
}
