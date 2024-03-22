import '@wordpress/block-library/build-style/common.css';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/theme.css';
import PostNotFound from "@/app/not-found";
import Image from 'next/image'
import Link from "next/link";
import Titre from "@/components/Titre/Titre";

import "./singleActu.scss"


function strip(html)
{
    return html.replace(/<[^>]+>/ig,"").replace(/\s+/g, ' ').trim().substring(0, 160)
}
async function getData(slug) {
    const res = await fetch(`https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/actualite/${slug}`, {cache: "no-cache"})

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function generateMetadata({ params, searchParams }, parent) {
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

   const data = await getData(params.slug)

    if (!data) return <PostNotFound/>

    const ariane = [
        {
            label: 'Nos actualités',
            url: '/actualites'
        },{
            label: data[0].titre,
            url: ''
        }
    ]


    const {titre, image, contenu, chapo, date} = data[0];


    return <main style={{marginBottom: '50px'}}>
        <Titre titre={titre} chapo={chapo} ariane={ariane}/>
        <div className="container">
            <div className="text-center">
                <Image height={503} width={1161} alt={titre} src={image}/>
            </div>
            <div className="date">
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512" width={20} fill={"var(--bleu)"}>
                    <path
                        d="M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16V64H64C28.7 64 0 92.7 0 128v32 32V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 160 128c0-35.3-28.7-64-64-64H352V16c0-8.8-7.2-16-16-16s-16 7.2-16 16V64H128V16zM32 192H416V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192zM64 96H384c17.7 0 32 14.3 32 32v32H32V128c0-17.7 14.3-32 32-32zm40 160h80c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8V264c0-4.4 3.6-8 8-8zm-40 8v80c0 22.1 17.9 40 40 40h80c22.1 0 40-17.9 40-40V264c0-22.1-17.9-40-40-40H104c-22.1 0-40 17.9-40 40z"/>
                </svg>
                <b>PUBLIÉ LE <time>{date}</time></b>

            </div>
            <div className="wysiwyg" dangerouslySetInnerHTML={{__html: contenu}}></div>
            <Link className={'btn'} href={"/actualites"}>Retour</Link>
        </div>
    </main>
}
