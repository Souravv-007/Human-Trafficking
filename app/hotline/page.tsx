"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, AlertTriangle, Clock, Globe } from "lucide-react";

export default function HotlinePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-2xl gradient-orange-red mx-auto mb-6 flex items-center justify-center neon-glow-orange">
            <Phone className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient-primary">Hotline Help</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            If you or someone you know is in immediate danger, please reach out. You are not alone.
          </p>
        </motion.div>

        <div className="glass rounded-2xl p-8 border-gradient neon-glow-orange animate-pulse-glow mb-8">
          <div className="flex items-center gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-orange-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">National Human Trafficking Hotline</h2>
              <p className="text-muted-foreground">Available 24/7, Confidential, Multi-language</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.a
              href="tel:1-888-373-7888"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-orange-500/20 border border-orange-500/30 hover:bg-orange-500/30 transition-colors"
            >
              <Phone className="w-6 h-6 text-orange-400" />
              <div>
                <p className="text-sm text-muted-foreground">Call</p>
                <p className="text-xl font-bold text-white">1-888-373-7888</p>
              </div>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-purple-500/20 border border-purple-500/30"
            >
              <MessageCircle className="w-6 h-6 text-purple-400" />
              <div>
                <p className="text-sm text-muted-foreground">Text</p>
                <p className="text-xl font-bold text-white">BeFree to 233733</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-xl p-6 border-gradient text-center"
          >
            <Clock className="w-8 h-8 text-green-400 mx-auto mb-4" />
            <h3 className="font-bold text-white mb-2">24/7 Availability</h3>
            <p className="text-sm text-muted-foreground">Help is always available, day or night</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-xl p-6 border-gradient text-center"
          >
            <Globe className="w-8 h-8 text-blue-400 mx-auto mb-4" />
            <h3 className="font-bold text-white mb-2">Multi-Language</h3>
            <p className="text-sm text-muted-foreground">Support in over 200 languages</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-6 border-gradient text-center"
          >
            <AlertTriangle className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="font-bold text-white mb-2">Confidential</h3>
            <p className="text-sm text-muted-foreground">Your information is protected</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 glass rounded-xl p-6 border border-border/50"
        >
          <h3 className="font-bold text-white mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text orange-400" />
            International Hotlines
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">UK</p>
              <p className="text-white">Modern Slavery Helpline: 0800 0121 700</p>
            </div>
            <div>
              <p className="text-muted-foreground">Canada</p>
              <p className="text-white">Canadian Hotline: 1-833-900-1010</p>
            </div>
            <div>
              <p className="text-muted-foreground">Australia</p>
              <p className="text-white">Australian Federal Police: 131 237</p>
            </div>
            <div>
              <p className="text-muted-foreground">EU</p>
              <p className="text-white">European Hotline: 116 006</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
