import {League_Spartan} from "next/font/google";
import "../assets/css/gutenberg.css"
import "../assets/css/styles.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Matomo from "@/Utils/Matomo";
import Script from "next/script";

const leagueSpartan = League_Spartan({subsets: ['latin']});
export const revalidate = 0;
// Opt out of caching for all data requests in the route segment
export const dynamic = 'force-dynamic'
export const metadata = {
    metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_FRONT_DNS}.com`),
    title: {
        template: '%s | Montluçon Habitat',
    },
    description: 'Location de logement (appartement et maison) pas cher à Montluçon y compris pour les étudiants.',
    verification: {
        google: "FE6sTnI31Z9UVvNiT_oiJsFR43UC8NROCRHnwD7JsKQ"
    }
}

const HEADER_FALLBACK = { menu: [], alerte: {}, logo: null, espace: null, demande_logement: null };
const FOOTER_FALLBACK = { menu: [], logo: { sizes: {} }, coordonnees: '', acces_rapide: [], social: {} };

async function getHeaderData() {
    try {
        const response = await fetch(`https://${process.env.NEXT_PUBLIC_BACK_DNS}/wp-json/montlucon/v1/options/header`);
        if (!response.ok) return HEADER_FALLBACK;
        return await response.json();
    } catch {
        return HEADER_FALLBACK;
    }
}

async function getFooterData() {
    try {
        const response = await fetch(`https://${process.env.NEXT_PUBLIC_BACK_DNS}/wp-json/montlucon/v1/options/footer`);
        if (!response.ok) return FOOTER_FALLBACK;
        return await response.json();
    } catch {
        return FOOTER_FALLBACK;
    }
}

export default async function RootLayout({children}) {

    const header = await getHeaderData()
    const footer = await getFooterData();

    return (
        <html lang="fr">
        <head>
            <Script
                strategy={"beforeInteractive"}
                src={`https://tarteaucitron.io/load.js?domain=${process.env.NEXT_PUBLIC_FRONT_DNS}&uuid=3c168a9d97f5c0995db99e0cb855768137ff4403`}/>
            <link rel="stylesheet" href="/css/print.css" media={"print"}/>
        </head>
        <body className={leagueSpartan.className}>
        <Header data={header}/>
        {children}
        <Footer data={footer}/>
        <Matomo/>
        </body>
        </html>
    );
}
