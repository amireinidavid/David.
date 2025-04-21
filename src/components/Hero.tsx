"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [animationLoaded, setAnimationLoaded] = useState(false);
  
  useEffect(() => {
    setAnimationLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-xl text-primary font-medium"
            >
              Hey there!
            </motion.h2>
            
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-6xl md:text-7xl font-bold"
              >
                I'm <span className="text-[#ff6b00]">David Amire</span>,
              </motion.h1>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-5xl md:text-6xl font-bold mt-2"
              >
                a Web Developer
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-lg leading-relaxed text-foreground/80 mt-4 max-w-xl"
            >
              Welcome to my digital portfolio, where creativity meets code. I specialize in crafting responsive, user-centric websites that bring your vision to life. Whether it's designing sleek user interfaces or developing robust back-end systems, I'm passionate about delivering impactful web solutions.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="pt-6"
            >
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-2.5 bg-[#ff6b00] text-white rounded text-sm font-semibold border border-[#ff6b00] hover:bg-transparent hover:text-[#ff6b00] transition-all"
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Image with Glowing Border */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              {/* Glowing border animation */}
              <motion.div 
                animate={{ 
                  boxShadow: ['0 0 10px 2px #ff6b00', '0 0 20px 5px #ff9d00', '0 0 10px 2px #ff6b00'],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-transparent border-4 border-[#ff6b00]/50 rounded-2xl"
              ></motion.div>
              
              {/* Spinning light effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <div className="absolute top-0 left-1/2 w-40 h-40 -ml-20 -mt-20 bg-[#ff6b00]/20 rounded-full blur-xl"></div>
                </motion.div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-[#ff6b00] rounded-tl-lg"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-[#ff6b00] rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-[#ff6b00] rounded-bl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-[#ff6b00] rounded-br-lg"></div>
              
              {/* Image container - wider */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-[380px] h-[320px] md:w-[500px] md:h-[400px] rounded-2xl overflow-hidden border-8 border-background shadow-2xl"
              >
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvq1jFT0fR5gWni8C_9pBMjNnq6aKYjsxDHA&s"
                  alt="David's profile"
                  fill
                  sizes="(max-width: 768px) 380px, 500px"
                  className="object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 