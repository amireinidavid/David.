import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   // Disable source maps in production for better performance
   productionBrowserSourceMaps: false,
  
   // Use SWC minifier instead of Terser for faster builds
   reactStrictMode: true,
   
   // Experimental features for performance
   experimental: {
     // Only import used components from these packages
     optimizePackageImports: ['framer-motion'],
     // Enable React optimization features
     optimizeCss: false,
     // Use memory cache for improved performance
     memoryBasedWorkersCount: true,
    serverMinification: false
   },
   images: {
    domains: ['localhost'],
    unoptimized: true,
    remotePatterns: [
      {
      protocol: "https",
      hostname: "encrypted-tbn0.gstatic.com",
    },
  ],
 },
 webpack: (config, { dev, isServer }) => {
  if (!dev && !isServer) {
    // Modify optimization settings
    config.optimization.minimize = true;
    
    // Disable specific optimization that might be causing issues
    if (config.optimization.splitChunks) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          default: false,
          vendors: false
        }
      };
    }
  }
  return config;
}
};

export default nextConfig;
