import {League_Spartan} from "next/font/google";
import "../assets/css/gutenberg.css"
import "../assets/css/styles.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {Fixed} from "@/components/Fixed/Fixed";
import Matomo from "@/Utils/Matomo";
import Script from "next/script";

const leagueSpartan = League_Spartan({subsets: ['latin']});
export const revalidate = 1;
export const metadata = {
    title: {
        template: '%s | Montluçon Habitat',
    },
    description: 'Location de logement (appartement et maison) pas cher à Montluçon y compris pour les étudiants.'
}
export default function RootLayout({children}) {
    return (
        <html lang="fr">
        <head>
            <Script src="https://tarteaucitron.io/load.js?domain=monlucon.netcomdev2.com&uuid=3c168a9d97f5c0995db99e0cb855768137ff4403" />
            <link rel="stylesheet" href="/css/print.css" media={"print"}/>
        </head>
        <body className={leagueSpartan.className}>
        <Header/>
        {children}
        <Footer/>
        <Matomo/>
        </body>
        </html>
    );
}
