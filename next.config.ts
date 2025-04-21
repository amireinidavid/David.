import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   // Disable source maps in production for better performance
   productionBrowserSourceMaps: false,
  
   // Use SWC minifier instead of Terser for faster builds
   swcMinify: true,
   
   // Experimental features for performance
   experimental: {
     // Only import used components from these packages
     optimizePackageImports: ['framer-motion'],
     
     // Enable React optimization features
     optimizeCss: true,
     
     // Use memory cache for improved performance
     memoryBasedWorkersCount: true,
   },
   images: {
    remotePatterns: [
      {
      protocol: "https",
      hostname: "encrypted-tbn0.gstatic.com",
    },
  ],
 },
};

export default nextConfig;
