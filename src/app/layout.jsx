import { League_Spartan } from "next/font/google";
import "../assets/css/styles.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const leagueSpartan = League_Spartan({subsets: ['latin']});

export const metadata = {
  title: "Montluçon Habitat",
  description: "Generated by create next app",
};

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