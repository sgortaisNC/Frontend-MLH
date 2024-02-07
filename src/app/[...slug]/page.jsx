"use client";

import PostNotFound from "@/app/not-found"
import useSWR from "swr";


const fetcher = url => fetch(url).then(r => r.json())

export default function Page({params}) {

    const lastSlug = params.slug[params.slug.length - 1]

    const {data, error} = useSWR(`https://api-montlucon.netcomdev2.com/wp-json/wp/v2/pages?slug=${lastSlug}`, fetcher)
    if (error) return <PostNotFound/>
    if (!data) return <></>

    const page = data[0];

    return <div>
        {page.title.rendered}
        <div className="wysiwyg" dangerouslySetInnerHTML={{ __html: page.content.rendered }}></div>

    </div>
}
