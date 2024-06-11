import Titre from "@/components/Titre/Titre";
import PostNotFound from "@/app/not-found";
import {DashboardComponent} from "@/components/DashboardComponent/DashboardComponent";

function strip(html) {
    return html.replace(/<[^>]+>/ig, "").replace(/\s+/g, ' ').trim().substring(0, 160)
}

async function getData($slug) {
    const url = `https://${process.env.BACK_DNS}/wp-json/montlucon/v1/page/espace-administrateur`;
    const res = await fetch(url,{next: {revalidate: 1}});

    if (!res.ok) {
        return false;
    }

    return res.json()
}

export async function generateMetadata({params, searchParams}, parent) {
    const lastSlug = 'espace-administrateur';
    const data = (await getData(lastSlug))[0];
    if (!data) return {
        title: "Page non trouvée",
        description: 'Location de logement (appartement et maison) pas cher à Montluçon y compris pour les étudiants.'
    };
    let metas = {
        title: data.titre,
        openGraph: {
            title: data.titre,
            images: [
                {
                    url: data.image, // Must be an absolute URL
                    width: 800,
                    height: 600,
                },
            ],
            locale: 'fr_FR',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: data.titre,
            images: [data.image], // Must be an absolute URL
        },
    }
    if (data.chapo || data.contenu) {
        metas.description = data.chapo ?? strip(data.contenu)
        metas.openGraph.description = data.chapo ?? strip(data.contenu)
        metas.twitter.description = data.chapo ?? strip(data.contenu)
    }
    return metas
}

export default async function Dashboard() {

    const lastSlug = 'espace-administrateur';
    const data = await getData(`https://${process.env.BACK_DNS}/wp-json/montlucon/v1/page/${lastSlug}`);
    
    if (!data) return <PostNotFound/>

    const {titre, chapo, contenu, ariane} = data[0];

    return (
        <div>
            <Titre titre={titre} chapo={chapo} ariane={ariane} />
            <div className="container">
                <DashboardComponent contenu={contenu}/>
            </div>
        </div>
    );
}
