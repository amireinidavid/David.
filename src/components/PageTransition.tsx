"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, createContext, useContext } from "react";

// Define transition context
const PageTransitionContext = createContext({});

// Page transition animations
const variants = {
  hidden: { 
    opacity: 0,
    filter: "blur(12px)",
  },
  enter: { 
    opacity: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 0.7, 
      ease: [0.33, 1, 0.68, 1],
      filter: { duration: 0.6 }
    }
  },
  exit: { 
    opacity: 0,
    filter: "blur(12px)",
    transition: { 
      duration: 0.5, 
      ease: [0.33, 1, 0.68, 1], 
      filter: { duration: 0.6 }
    }
  }
};

// Component to wrap around each page
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        className="w-full h-full"
        style={{ 
          transformOrigin: "center center",
          willChange: "opacity, filter",
          transform: "translateZ(0)" // Force hardware acceleration
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Provider component to manage transitions
export function PageTransitionProvider({ children }: { children: ReactNode }) {
  return (
    <PageTransitionContext.Provider value={{}}>
      <PageTransition>{children}</PageTransition>
    </PageTransitionContext.Provider>
  );
}

// Hook to access transition context if needed
export function usePageTransition() {
  return useContext(PageTransitionContext);
} 