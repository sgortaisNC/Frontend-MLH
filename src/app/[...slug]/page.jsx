import PostNotFound from "@/app/not-found"
import Image from "next/image";
import './page.scss';
import ForminatorField from "@/components/ForminatorField/ForminatorField";
import Titre from "@/components/Titre/Titre";
import Sidebar from "@/components/Sidebar/Sidebar";
import {CustomForm} from "@/components/CustomForm/CustomForm";


function strip(html) {
    return html.replace(/<[^>]+>/ig, "").replace(/\s+/g, ' ').trim().substring(0, 160)
}

async function getData($slug) {
    const res = await fetch(`https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/page/${$slug}`,{
        next: {
            revalidate: 1,
        }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function generateMetadata({params, searchParams}, parent) {
    const lastSlug = params.slug[params.slug.length - 1]
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

    const lastSlug = params.slug[params.slug.length - 1]
    const data = await getData(lastSlug)
    if (!data || data.length === 0) {
        return <PostNotFound/>
    }

    const {titre, chapo, image, contenu, formulaire, formID, documents, liens, ariane} = data[0];

    return <div>
        <Titre titre={titre} chapo={chapo} ariane={ariane}/>
        <div
            className={(documents && documents.length > 0) || (liens && liens.length > 0) ? "container container--inner" : "container"}>
            {(documents && documents.length > 0) || (liens && liens.length > 0) ?
                <Sidebar documents={documents} liens={liens}/> : null
            }
            <div className="content">
                <div className="text-center">
                    <Image src={image} alt={titre} height={503} width={1161}/>
                </div>
                <div className="wysiwyg" dangerouslySetInnerHTML={{__html: contenu}}></div>
                {formulaire && formID ?
                    <CustomForm formId={formID}>
                        <input type="hidden" name="form_id" value={formID}/>
                        {formulaire.map((wrapper) => <ForminatorField key={wrapper.wrapper_id} wrapper={wrapper}/>)}
                        <button type={'submit'} className={'btn'}>Envoyer</button>
                    </CustomForm>
                    : null
                }
            </div>
        </div>
    </div>
}
