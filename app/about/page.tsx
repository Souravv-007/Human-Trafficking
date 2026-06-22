"use client";

import { motion } from "framer-motion";
import { Info, Heart, Shield, Globe, Users, Sparkles } from "lucide-react";

const team = [
  { role: "AI & Technology", focus: "Building awareness tools" },
  { role: "Research", focus: "Understanding trafficking patterns" },
  { role: "Advocacy", focus: "Policy and community engagement" },
  { role: "Survivor Support", focus: "Centering lived experiences" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-2xl gradient-purple-orange mx-auto mb-6 flex items-center justify-center">
            <Info className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient-primary">About SafeRouteHub</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Empowering communities through AI-driven awareness to end human trafficking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-8 border-gradient mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            SafeRouteHub is an AI-powered platform dedicated to preventing human trafficking through education, awareness, and community empowerment. We believe that informed communities are protected communities.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our platform leverages advanced AI technology to generate trauma-informed, educational content that helps organizations, advocates, and individuals spread awareness about trafficking warning signs, prevention strategies, and survivor support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-6 border-gradient"
          >
            <Heart className="w-8 h-8 text-pink-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Survivor-Centered</h3>
            <p className="text-sm text-muted-foreground">
              Every piece of content is crafted with dignity and respect for survivors, avoiding sensationalism.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-6 border-gradient"
          >
            <Shield className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Prevention First</h3>
            <p className="text-sm text-muted-foreground">
              We focus on education and early intervention to prevent trafficking before it occurs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-6 border-gradient"
          >
            <Sparkles className="w-8 h-8 text-orange-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">AI-Powered</h3>
            <p className="text-sm text-muted-foreground">
              Leveraging technology to scale awareness efforts and reach more communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-6 border-gradient"
          >
            <Globe className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Global Reach</h3>
            <p className="text-sm text-muted-foreground">
              Content designed to be culturally sensitive and adaptable worldwide.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-2xl p-8 border-gradient"
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <Users className="w-6 h-6 text-purple-400" />
            Our Approach
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {team.map((member, index) => (
              <div key={member.role} className="flex items-center gap-4 p-3 rounded-lg bg-background/30">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <div>
                  <p className="font-medium text-white">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
