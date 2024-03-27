import PostNotFound from "@/app/not-found";
import Titre from "@/components/Titre/Titre";
import {ListeOffre} from "@/components/ListeOffre/ListeOffre";

function strip(html) {
    return html.replace(/<[^>]+>/ig, "").replace(/\s+/g, ' ').trim().substring(0, 160)
}

async function getData() {
    const res = await fetch(`https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/offres`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function generateMetadata({params, searchParams}, parent) {
    const lastSlug = params.slug;
    const data = (await getData(lastSlug))[0];
    let metas = {
        title: 'Liste des offres d\'emploi',
        openGraph: {
            title: 'Liste des offres d\'emploi',
            locale: 'fr_FR',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Liste des offres d\'emploi',
        },
    }

    let desc = "Retrouvez ici la liste des offres d'emploi de Montluçon Habitat";
    metas.description = desc;
    metas.openGraph.description = desc;
    metas.twitter.description = desc;

    return metas
}

export default async function Page() {
    const data = await getData();

    if (!data) return <PostNotFound/>


    return <main>
        <Titre titre={`Liste des offres d'emploi`} ariane={[{label: "Liste des offres d'emploi", url: ''}]}/>

        <div className="container">
            <ListeOffre data={data}/>
        </div>
    </main>;
}
