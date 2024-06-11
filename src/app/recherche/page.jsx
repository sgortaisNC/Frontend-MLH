import Titre from "@/components/Titre/Titre";
import {GlobalSearch} from "@/components/GlobalSearch/GlobalSearch";

async function getHomeData() {
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_BACK_DNS}/wp-json/montlucon/v1/options/homepage`);

    if (!res.ok) {
        return false;
    }

    return res.json()
}
export async function generateMetadata({ params, searchParams }, parent) {
    const data = await getHomeData();
    let metas = {
        title: "Votre recherche",
        openGraph: {
            title: 'Votre recherche',
            images: [
                {
                    url: data.baseline.image, // Must be an absolute URL
                    width: 800,
                    height: 600,
                },
            ],
            locale: 'fr_FR',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: "Votre recherche",
            images: [data.baseline.image], // Must be an absolute URL
        },
    }

    let desc = 'Utilisez notre moteur de recherche pour trouver ce que vous cherchez.';

    metas.description = desc;
    metas.openGraph.description = desc;
    metas.twitter.description = desc;

    return metas
}

async function getData(motCle) {
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_BACK_DNS}/wp-json/montlucon/v1/recherche/${motCle}`);

    if (!res.ok) {
        return false;
    }

    return res.json()
}
export default async function Page({ params, searchParams }) {
    const recherche = await getData(searchParams.motcle);

    return (
        <>
            <Titre titre={`Votre recherche pour "${recherche.s}"`} ariane={[{label: "Votre recherche", url: ''}]}/>
            <div className="container">
                <GlobalSearch recherche={recherche} />
            </div>
        </>
    )
}
