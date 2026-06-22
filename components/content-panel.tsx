"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Play, ExternalLink, TrendingUp, Users, Globe, AlertCircle, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: 1,
    suffix: "%",
    label: "of victims are identified",
    icon: Eye,
    color: "text-red-400",
  },
  {
    value: 70,
    suffix: "%",
    label: "trafficking through manipulation",
    icon: AlertCircle,
    color: "text-orange-400",
  },
  {
    value: 65,
    suffix: "%",
    label: "victims know their trafficker",
    icon: Users,
    color: "text-purple-400",
  },
  {
    value: 250,
    suffix: "%",
    label: "increase in online recruitment",
    icon: Globe,
    color: "text-pink-400",
  },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function ContentPanel() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      <div className="glass rounded-2xl overflow-hidden border-gradient hover-lift">
        <div className="relative aspect-video bg-gradient-to-br from-purple-900/50 to-orange-900/50">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 rounded-full gradient-purple-orange flex items-center justify-center cursor-pointer neon-glow-purple"
            >
              <Play className="w-8 h-8 text-white ml-1" />
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7869071/pexels-photo-7869071.jpeg?auto=compress&cs=tinysrgb&w=1260')] opacity-30 bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-xs uppercase tracking-widest text-orange-400 mb-1">Featured Story</p>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              Survivor Journey
              <ExternalLink className="w-4 h-4 text-purple-400" />
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              A powerful testimony of hope and recovery
            </p>
          </div>
        </div>
      </div>

      <div className="glass rounded-2xl p-6 border-gradient">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg font-bold text-white">Critical Statistics</h3>
        </div>
        <div ref={statsRef} className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glass-strong rounded-xl p-4 border border-border/30 hover:border-purple-500/30 transition-colors"
            >
              <stat.icon className={cn("w-6 h-6 mb-2", stat.color)} />
              <p className="text-2xl font-bold text-white">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isStatsInView} />
              </p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
