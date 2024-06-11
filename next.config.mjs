/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ]
    },
    env:{
        BACK_DNS: process.env.BACK_DNS,
        FRONT_DNS: process.env.FRONT_DNS
    }
};

export default nextConfig;
