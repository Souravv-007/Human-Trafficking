"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  AlertTriangle,
  Phone,
  Mail,
  Send,
  Eye,
  Heart,
  Shield,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface QuickAction {
  icon: React.ElementType;
  label: string;
  color: string;
  description: string;
}

const quickActions: QuickAction[] = [
  { icon: Eye, label: "Warning Signs", color: "text-orange-400", description: "Learn to identify trafficking indicators" },
  { icon: Heart, label: "Survivor Stories", color: "text-pink-400", description: "Read inspiring journeys of recovery" },
  { icon: Shield, label: "Prevention Tips", color: "text-purple-400", description: "Stay safe with protective measures" },
  { icon: BarChart3, label: "Victim Statistics", color: "text-red-400", description: "Understand the scope globally" },
];

interface AIAssistantPanelProps {
  onQuickAction?: (action: string) => void;
  onGenerateClick?: () => void;
}

export default function AIAssistantPanel({ onQuickAction, onGenerateClick }: AIAssistantPanelProps) {
  const [query, setQuery] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col"
    >
      <div className="glass rounded-2xl p-6 border-gradient neon-glow-purple flex-1 flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-14 h-14 rounded-xl gradient-purple-orange flex items-center justify-center"
          >
            <Sparkles className="w-7 h-7 text-white" />
          </motion.div>
          <div>
            <h2 className="text-2xl font-bold text-white">SafeRoute Assistant</h2>
            <p className="text-sm text-muted-foreground">AI-Powered Awareness Guide</p>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          I&apos;m here to help you learn about human trafficking, identify warning signs,
          understand survivor experiences, and create awareness content to make a difference.
        </p>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-strong rounded-xl p-4 mb-6 border border-orange-500/30 neon-glow-orange animate-pulse-glow"
        >
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-orange-400 mb-2">
                If you or someone you know needs help:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-400" />
                  <span className="text-white font-medium">National Human Trafficking Hotline</span>
                </div>
                <div className="pl-6 space-y-1">
                  <a href="tel:1-888-373-7888" className="block text-orange-400 hover:text-orange-300 transition-colors">
                    1-888-373-7888
                  </a>
                  <p className="text-muted-foreground text-sm">
                    Text <span className="text-white font-medium">BeFree</span> to 233733
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mb-6">
          <p className="text-sm font-medium text-white mb-3">Quick Actions</p>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onQuickAction?.(action.label)}
                className={cn(
                  "glass rounded-xl p-4 text-left border border-border/50 hover:border-purple-500/50 transition-all group"
                )}
              >
                <action.icon className={cn("w-5 h-5 mb-2", action.color)} />
                <p className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                  {action.label}
                </p>
                <p className="text-xs text-muted-foreground mt-1 hidden sm:block">
                  {action.description}
                </p>
              </motion.button>
            ))}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onGenerateClick}
          className="w-full rounded-xl p-4 gradient-primary text-white font-semibold flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-purple-500/25 transition-shadow mb-6"
        >
          <Sparkles className="w-5 h-5" />
          Generate Awareness Post
        </motion.button>

        <div className="mt-auto">
          <p className="text-sm font-medium text-white mb-3">Ask About Trafficking Awareness</p>
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything about trafficking awareness..."
              className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 pr-12 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-purple-500 hover:bg-purple-600 flex items-center justify-center transition-colors">
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
