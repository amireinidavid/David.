"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CountUpValueProps {
  end: number;
  duration: number;
  suffix?: string;
}

const CountUpValue = ({ end, duration, suffix = '' }: CountUpValueProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * end));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return (
    <span className="text-[#ff6b00] font-bold text-2xl md:text-3xl">
      {count}{suffix}
        </span>
  );
};

const CountUp = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative z-10 mx-auto max-w-4xl -mt-16 mb-12 px-4"
    >
      <div className="bg-[#111111] border border-[#222222] rounded-xl px-6 py-4 flex flex-col md:flex-row items-center justify-between shadow-lg backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-4 md:mb-0">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-zinc-400 text-sm mb-1">Years of Experience</p>
            <CountUpValue end={4} duration={2000} suffix="+" />
          </div>
          
          <div className="hidden md:block h-12 w-px bg-[#222222]"></div>
          
          <div className="text-center md:text-left">
            <p className="text-zinc-400 text-sm mb-1">Projects Completed</p>
            <CountUpValue end={100} duration={2000} suffix="+" />
          </div>
      </div>
      
        <div className="flex items-center space-x-3">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#191919] hover:bg-[#222222] transition-colors border border-[#333333] text-zinc-400 hover:text-[#ff6b00]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </Link>
          
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#191919] hover:bg-[#222222] transition-colors border border-[#333333] text-zinc-400 hover:text-[#ff6b00]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>
          
          <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#191919] hover:bg-[#222222] transition-colors border border-[#333333] text-zinc-400 hover:text-[#ff6b00]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </Link>
          
          <Link href="https://gitlab.com" target="_blank" rel="noopener noreferrer" 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#191919] hover:bg-[#222222] transition-colors border border-[#333333] text-zinc-400 hover:text-[#ff6b00]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CountUp;