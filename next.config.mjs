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
    },
    redirects: async () => {
        return [
            {
                source: '/SITE_INTERNET_MH_web/fr/Logements/:slug*',
                destination: '/logements-a-louer',
                permanent: true,
            },
            {
                source: '/SITE_INTERNET_MH_web/FR/Actualites/:slug*',
                destination: '/actualites',
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
