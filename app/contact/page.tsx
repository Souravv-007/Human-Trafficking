"use client";

import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-2xl gradient-purple-orange mx-auto mb-6 flex items-center justify-center">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient-primary">Contact Us</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have questions, partnership inquiries, or want to share your story? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 border-gradient space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-white mb-2 block">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-white mb-2 block">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-white mb-2 block">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-white mb-2 block">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 resize-none"
                  placeholder="Tell us more..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-xl p-4 gradient-primary text-white font-semibold flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="glass rounded-xl p-5 border-gradient">
              <MapPin className="w-6 h-6 text-purple-400 mb-3" />
              <h3 className="font-bold text-white mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">
                Globally distributed team<br />
                Working across time zones
              </p>
            </div>

            <div className="glass rounded-xl p-5 border-gradient">
              <Mail className="w-6 h-6 text-orange-400 mb-3" />
              <h3 className="font-bold text-white mb-1">Email</h3>
              <p className="text-sm text-purple-400">contact@saferoute.hub</p>
            </div>

            <div className="glass rounded-xl p-5 border-gradient">
              <Phone className="w-6 h-6 text-pink-400 mb-3" />
              <h3 className="font-bold text-white mb-1">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                We typically respond within 24-48 hours
              </p>
            </div>

            <div className="glass rounded-xl p-5 border border-orange-500/30 bg-orange-500/5">
              <p className="text-sm text-orange-300 mb-2 font-medium">
                Need immediate help?
              </p>
              <p className="text-xs text-muted-foreground mb-3">
                If you or someone you know is in danger, contact the hotline immediately.
              </p>
              <a
                href="/hotline"
                className="text-xs text-orange-400 hover:text-orange-300 transition-colors"
              >
                View Hotline Numbers &rarr;
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
