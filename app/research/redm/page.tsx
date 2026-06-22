"use client";

import { motion } from "framer-motion";
import {
  FlaskConical,
  Eye,
  Shield,
  AlertTriangle,
  Heart,
  Users,
  CheckCircle,
  XCircle,
  ArrowRight,
} from "lucide-react";

const philosophyItems = [
  {
    icon: Eye,
    title: "Prevention Through Awareness",
    description: "Educating communities before exploitation occurs, empowering people to recognize and prevent trafficking situations.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Heart,
    title: "Survivor Storytelling",
    description: "Amplifying survivor voices with dignity, centering their experiences in advocacy and education efforts.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Users,
    title: "Public Education",
    description: "Creating accessible, trauma-informed educational content that reaches millions and changes perspectives.",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Pattern Recognition",
    description: "Using AI and data to identify trafficking patterns, helping communities spot warning signs early.",
    color: "from-pink-500 to-orange-500"
  }
];

const whatWorks = [
  { text: "Early education in schools and communities", impact: "High" },
  { text: "Community vigilance programs", impact: "High" },
  { text: "Survivor-led awareness campaigns", impact: "Critical" },
  { text: "Trauma-informed support services", impact: "Critical" },
  { text: "Multi-sector collaboration", impact: "High" }
];

const whatDoesnt = [
  { text: "Fear-based campaigns without context", reason: "Creates stigma" },
  { text: "Rescue operations without recovery plans", reason: "Re-traumatizes victims" },
  { text: "Generic awareness posts", reason: "Fails to educate" },
  { text: "Vigilante investigations", reason: "Endangers victims" },
  { text: "Sensational media coverage", reason: "Exploits trauma" }
];

export default function RedMResearchPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-500/30 mb-6"
          >
            <FlaskConical className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-300">Research Center</span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">RedM Philosophy</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding a prevention-first approach to ending human trafficking
          </p>
        </motion.div>

        <div className="glass rounded-2xl p-8 border-gradient neon-glow-purple mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl gradient-orange-red flex items-center justify-center">
              <FlaskConical className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">What Makes RedM Different</h2>
              <p className="text-muted-foreground">A paradigm shift in anti-trafficking work</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {philosophyItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-strong rounded-xl p-5 border border-border/30 hover:border-purple-500/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 border-gradient"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white">What Works</h3>
            </div>
            <div className="space-y-3">
              {whatWorks.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-green-500/5 border border-green-500/20"
                >
                  <span className="text-sm text-white">{item.text}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 font-medium">
                    {item.impact}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 border-gradient"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white">What Doesn&apos;t</h3>
            </div>
            <div className="space-y-3">
              {whatDoesnt.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-red-500/5 border border-red-500/20"
                >
                  <span className="text-sm text-white">{item.text}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-red-500/20 text-red-400 font-medium">
                    {item.reason}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 border-gradient text-center"
        >
          <AlertTriangle className="w-12 h-12 text-orange-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">The Rescue vs Prevention Debate</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left mb-6">
            <div className="glass-strong rounded-xl p-4">
              <p className="text-purple-400 font-semibold mb-2">Traditional Rescue NGOs</p>
              <p className="text-sm text-muted-foreground">
                Focus on intervention after trafficking occurs. Often require high resources for operations and recovery services.
              </p>
            </div>
            <div className="glass-strong rounded-xl p-4 border border-purple-500/30">
              <p className="text-orange-400 font-semibold mb-2">RedM Prevention Model</p>
              <p className="text-sm text-muted-foreground">
                Stops trafficking before it starts through education, awareness, and community empowerment. Scalable and sustainable.
              </p>
            </div>
            <div className="glass-strong rounded-xl p-4">
              <p className="text-pink-400 font-semibold mb-2">Combined Impact</p>
              <p className="text-sm text-muted-foreground">
                Both approaches are needed: prevention reduces future cases while rescue supports current victims.
              </p>
            </div>
          </div>
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-primary text-white font-semibold"
          >
            Start Creating Awareness Content
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
