"use client";

import Titre from "@/components/Titre/Titre";
import useSWR from "swr";
import Link from "next/link";
import PostNotFound from "@/app/not-found";
import './offre.scss';

const fetcher = url => fetch(url).then(r => r.json());

export default function Page({params}) {


    const {data, error} = useSWR(`https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/offre/${params.slug}`, fetcher)

    if (error) return <PostNotFound/>
    if (!data) return <></>

    const offre = data[0];

    return (
        <>
            <Titre titre={offre.titre} chapo={offre.chapo}/>

            <div className="container" style={{marginBottom: "50px"}}>
                [caractéristiques]
                [postuler]
                [contenu]
                br
                <Link href={"/nous-rejoindre"} className={"btn"}>Retour</Link>
            </div>


        </>
    )
}
