import { League_Spartan } from "next/font/google";
import "../assets/css/gutenberg.css"
import "../assets/css/styles.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const leagueSpartan = League_Spartan({subsets: ['latin']});

export const metadata = {
    title: {
        template: '%s | Montluçon Habitat',
    },
    description: 'Location de logement (appartement et maison) pas cher à Montluçon y compris pour les étudiants.'
}
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={leagueSpartan.className}>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
