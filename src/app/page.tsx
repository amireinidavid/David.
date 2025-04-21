"use client";

import Hero from "@/components/Hero";
import CountUpSection from "@/components/countup";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TechItem = ({ tech }: { tech: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="px-6 py-3 bg-secondary/30 rounded-lg text-foreground/80"
    >
      {tech}
    </motion.div>
  );
};

export default function Home() {
  const techSectionRef = useRef(null);
  const techSectionInView = useInView(techSectionRef, { once: true, amount: 0.2 });

  return (
    <div>
      <Hero />
      <div className="mt-[-80px] relative z-10">
        <CountUpSection />
      </div>
    </div>
  );
}
