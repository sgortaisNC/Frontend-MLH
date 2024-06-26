import useSWR from "swr";
import PostNotFound from "@/app/not-found";
import Titre from "@/components/Titre/Titre";
import ListeActualites from "@/components/ListeActualites/ListeActualites";

async function getData(){
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_BACK_DNS}/wp-json/montlucon/v1/actualites`)

    if (!res.ok) {
        return false;
    }

    return res.json()
}
export const revalidate = 0;
export const dynamic = 'force-dynamic'
export async function generateMetadata({params, searchParams}, parent) {
    let title = 'Nos actualités'
    let metas = {
        title: title,
        openGraph: {
            title: title,
            locale: 'fr_FR',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
        },
    }

    let desc = "Retrouvez ici la liste des actualités de Montluçon Habitat";
    metas.description = desc;
    metas.openGraph.description = desc;
    metas.twitter.description = desc;

    return metas
}


export default async function Page() {

    const data = await getData();

    if (!data) return <PostNotFound/>

    return <main>
        <Titre titre={'Nos actualités'} ariane={[{label: "Nos actualités", url:""}]}/>

        <div className="container">

            <ListeActualites data={data} />
        </div>
    </main>;
}
