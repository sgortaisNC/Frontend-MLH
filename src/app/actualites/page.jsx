"use client";
import useSWR from "swr";
import Link from "next/link";
import PostNotFound from "@/app/not-found";

const fetcher = url => fetch(url).then(r => r.json())

export default function Page() {

    const {data, error} = useSWR("https://api-montlucon.netcomdev2.com/wp-json/wp/v2/posts", fetcher)
    if (error) return <PostNotFound/>
    if (!data) return <></>


    return <main>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="container">
            <h1>Nos actualités</h1>
            <ul>
                {data.map((post) =>
                    <li key={post.id}>
                        <h2><Link href={`/actualites/${post.slug}`}>{post.title.rendered}</Link></h2>
                    </li>
                )}
            </ul>
        </div>
    </main>;
}
