"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Reset progress and show progress bar on route change
    setProgress(0);
    setIsVisible(true);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Slowly increase to 90%
        if (prev < 90) {
          return prev + (90 - prev) * 0.1;
        }
        return prev;
      });
    }, 100);

    // Complete the progress after a delay
    const completeTimeout = setTimeout(() => {
      setProgress(100);
      
      // Hide after completion
      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 500);
      
      return () => clearTimeout(hideTimeout);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(completeTimeout);
    };
  }, [pathname, searchParams]);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none"
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 300ms ease-in-out' }}
    >
      <div 
        className="h-full bg-primary"
        style={{ 
          width: `${progress}%`, 
          transition: 'width 300ms ease-in-out',
          boxShadow: '0 0 10px rgba(255, 107, 0, 0.5)'
        }}
      />
    </div>
  );
} 