/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  experimental: {
    // Disable some experimental features that might cause issues
    esmExternals: false,
    optimizeCss: false,
    serverMinification: false
  },
  // Disable critters which seems to be causing the build error
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