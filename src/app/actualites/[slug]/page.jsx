"use client";

import '@wordpress/block-library/build-style/common.css';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/theme.css';
import useSWR from "swr";
import PostNotFound from "@/app/not-found";
import Image from 'next/image'
import Link from "next/link";


const fetcher = url => fetch(url).then(r => r.json())


export default function Page({params}) {

    const {
        data,
        error
    } = useSWR(`https://api-montlucon.netcomdev2.com/wp-json/wp/v2/posts?slug=${params.slug}`, fetcher)

    if (error) return <PostNotFound/>
    if (!data) return <></>


    const post = data[0];


    return <main>
        <h1>TO DO </h1>
        <h1>{post.title.rendered}</h1>
        <Image height={100} width={100} alt={""}  src={""}/>
        <time>{post.date}</time>
        <div className="chapo" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div>
        <div className="wysiwyg" dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
        <Link className={'btn'} href={"/actualites"}>Retour</Link>
    </main>
}
