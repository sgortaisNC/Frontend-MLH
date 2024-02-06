"use client";
import {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";

export default function Page() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://montlucon.loc/wp-json/wp/v2/posts").then((response) => {
            setPosts(response.data);
        })
    }, []);

    return <main>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="container">
            <h1>Nos actualités</h1>
            <ul>
                {posts.map((post) =>
                    <li key={post.id}>
                        <h2><Link href={`/actualites/${post.slug}`}>{post.title.rendered}</Link></h2>
                    </li>
                )}
            </ul>
        </div>
    </main>;
}
