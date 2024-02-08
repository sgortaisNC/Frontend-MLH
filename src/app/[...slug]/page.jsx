"use client";

import PostNotFound from "@/app/not-found"
import useSWR from "swr";
import Image from "next/image";


const fetcher = url => fetch(url).then(r => r.json())

export default function Page({params}) {

    const lastSlug = params.slug[params.slug.length - 1]

    const {data, error} = useSWR(`https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/page/${lastSlug}`, fetcher)
    if (error) return <PostNotFound/>
    if (!data) return <></>

    const {titre, chapo, image, contenu} = data[0];

    return <div>
        <h1>{titre}</h1>
        <Image src={image} alt={titre} height={100} width={100} />
        <div className="chapo" dangerouslySetInnerHTML={{ __html: chapo }}></div>
        <div className="wysiwyg" dangerouslySetInnerHTML={{ __html: contenu }}></div>

    </div>
}
