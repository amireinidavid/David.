"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { useSearchParamsWrapper } from "./useSearchParamsWrapper";

// This is the main component that uses the wrapped search params
export default function PageProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  return (
    <Suspense fallback={<ProgressBarFallback />}>
      <ProgressBarWithParams 
        progress={progress}
        setProgress={setProgress}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        pathname={pathname}
      />
    </Suspense>
  );
}

// Fallback component when suspense is loading
function ProgressBarFallback() {
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none">
      <div 
        className="h-full bg-primary animate-pulse"
        style={{ 
          width: '60%',
          boxShadow: '0 0 10px rgba(255, 107, 0, 0.5)'
        }}
      />
    </div>
  );
}

// Component that safely uses useSearchParams inside Suspense
function ProgressBarWithParams({ 
  progress, 
  setProgress, 
  isVisible, 
  setIsVisible,
  pathname
}: {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
}) {
  const searchParams = useSearchParamsWrapper();

  useEffect(() => {
    // Reset progress and show progress bar on route change
    setProgress(0);
    setIsVisible(true);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev: number) => {
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
  }, [pathname, searchParams, setProgress, setIsVisible]);

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