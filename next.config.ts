import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */

    // Output configuration
    output: 'standalone',

    // Image optimization
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [],
    },

    // Enable compression
    compress: true,

    // Strict mode for better debugging
    reactStrictMode: true,

    // Experimental features
    experimental: {
        // Enable turbopack in development (already enabled via --turbopack flag)
        // This is automatically detected when using npm run dev with turbopack
        viewTransition: true,
    },
};

export default nextConfig;
