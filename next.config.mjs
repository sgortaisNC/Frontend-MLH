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
        NEXT_PUBLIC_BACK_DNS: process.env.NEXT_PUBLIC_BACK_DNS,
        NEXT_PUBLIC_FRONT_DNS: process.env.NEXT_PUBLIC_FRONT_DNS
    }
};

export default nextConfig;
