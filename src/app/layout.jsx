import {League_Spartan} from "next/font/google";
import "../assets/css/gutenberg.css"
import "../assets/css/styles.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Matomo from "@/Utils/Matomo";
import Script from "next/script";

const leagueSpartan = League_Spartan({subsets: ['latin']});
export const revalidate = 0;
export const metadata = {
    metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_FRONT_DNS}.com`),
    title: {
        template: '%s | Montluçon Habitat',
    },
    description: 'Location de logement (appartement et maison) pas cher à Montluçon y compris pour les étudiants.'
}

async function getDatas() {
    const header = await fetch(`https://${process.env.NEXT_PUBLIC_BACK_DNS}/wp-json/montlucon/v1/options/header`,
        {next: {revalidate: 0}}
    );
    const headerJSON = await header.json();

    const footer = await fetch(`https://${process.env.NEXT_PUBLIC_BACK_DNS}/wp-json/montlucon/v1/options/footer`,
        {next: {revalidate: 0}}
    );
    const footerJSON = await footer.json();

    return {header: headerJSON, footer: footerJSON};

}

export default async function RootLayout({children}) {

    const {header, footer} = await getDatas();

    return (
        <html lang="fr">
        <head>
            <meta name="google-site-verification" content="FE6sTnI31Z9UVvNiT_oiJsFR43UC8NROCRHnwD7JsKQ"/>
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
