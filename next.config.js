/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
    experimental: {
        viewTransition: true,
    },
}

module.exports = nextConfig

