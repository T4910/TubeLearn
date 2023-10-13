/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                pathname: '/**',
            },
        ],
    }
}

module.exports = nextConfig
