"use client";

import { motion } from "framer-motion";
import { Shield, Phone, Globe, BookOpen, AlertTriangle, Users } from "lucide-react";

const resources = [
  {
    icon: Phone,
    title: "National Human Trafficking Hotline",
    description: "24/7 confidential support",
    action: "1-888-373-7888",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Globe,
    title: "Polaris Project",
    description: "Leading anti-trafficking organization",
    action: "polarisproject.org",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Department of Homeland Security",
    description: "Blue Campaign resources",
    action: "dhs.gov/blue-campaign",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: BookOpen,
    title: "Trafficking in Persons Report",
    description: "Annual global assessment",
    action: "state.gov/trafficking",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Users,
    title: "UNODC",
    description: "United Nations Office on Drugs and Crime",
    action: "unodc.org",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: AlertTriangle,
    title: "Missing Children Organizations",
    description: "National Center for Missing & Exploited Children",
    action: "missingkids.org",
    color: "from-pink-500 to-purple-500"
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-2xl gradient-purple-orange mx-auto mb-6 flex items-center justify-center">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient-primary">Resources</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Essential resources for victims, advocates, and those seeking to learn more about human trafficking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <motion.a
              key={resource.title}
              href={`https://${resource.action}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 border-gradient hover-lift group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <resource.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                {resource.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
              <p className="text-sm text-purple-400 mt-3">{resource.action}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
