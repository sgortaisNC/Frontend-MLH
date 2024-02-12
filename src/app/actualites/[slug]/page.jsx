"use client";

import '@wordpress/block-library/build-style/common.css';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/theme.css';
import useSWR from "swr";
import PostNotFound from "@/app/not-found";
import Image from 'next/image'
import Link from "next/link";
import Titre from "@/components/Titre/Titre";


const fetcher = url => fetch(url).then(r => r.json())


export default function Page({params}) {

    const {
        data,
        error
    } = useSWR(`https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/actualite/${params.slug}`, fetcher)

    if (error) return <PostNotFound/>
    if (!data) return <></>


    const {titre, image, contenu, chapo, date} = data[0];


    return <main>
        <Titre titre={titre} chapo={chapo} />
        <Image height={100} width={100} alt={titre}  src={image}/>
        <time>{date}</time>
        <div className="wysiwyg" dangerouslySetInnerHTML={{__html: contenu}}></div>
        <Link className={'btn'} href={"/actualites"}>Retour</Link>
    </main>
}
