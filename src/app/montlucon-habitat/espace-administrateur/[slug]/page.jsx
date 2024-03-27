import PostNotFound from "@/app/not-found"
import './page.scss';
import Titre from "@/components/Titre/Titre";
import {InnerPrivate} from "@/components/InnerPrivate/InnerPrivate";

function strip(html) {
    return html.replace(/<[^>]+>/ig, "").replace(/\s+/g, ' ').trim().substring(0, 160)
}

async function getData(slug) {
    const res = await fetch(`https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/page/${slug}`,
        {
            next: {
                revalidate: 1,
            }
        });

    console.log(res)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function generateMetadata({params, searchParams}, parent) {
    const lastSlug = params.slug;
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

export default async function Page({params}) {

    const lastSlug = params.slug;
    const data = await getData(lastSlug);

    if (!data) return <PostNotFound/>

    const {titre, chapo, image, contenu, formulaire, formID, documents, liens, ariane} = data[0];


    return <div>
        <Titre titre={titre} chapo={chapo} ariane={ariane}/>
        <InnerPrivate data={data} />
    </div>
}
