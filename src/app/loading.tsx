"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md">
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute w-24 h-24 rounded-full border-t-2 border-primary animate-spin-slow"></div>
        <div className="absolute w-16 h-16 rounded-full border-t-2 border-accent animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
        <div className="text-foreground font-medium">Loading...</div>
      </motion.div>
    </div>
  );
} 