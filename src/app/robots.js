export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/montlucon-habitat/espace-administrateur/',
        },
        sitemap: 'https://montlucon-habitat.fr/sitemap.xml',
    }
}
