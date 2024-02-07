"use client";

import '@wordpress/block-library/build-style/common.css';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/theme.css';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'
import useSWR from "swr";
import PostNotFound from "@/app/not-found";

const fetcher = url => fetch(url).then(r => r.json())


export default function Page({params}) {

    const {
        data,
        error
    } = useSWR(`https://api-montlucon.netcomdev2.com/wp-json/wp/v2/posts?slug=${params.slug}`, fetcher)
    if (error) return <PostNotFound/>
    if (!data) return <></>

    const options = [
        {name: 'Swedish', value: 'sv'},
        {name: 'English', value: 'en'},
        {
            type: 'group',
            name: 'Group name',
            items: [
                {name: 'Spanish', value: 'es'},
            ]
        },
    ];

    const post = data[0];

    return <main>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h1>{post.title.rendered}</h1>
        <time>{post.date}</time>
        <div className="wysiwyg" dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>

        <SelectSearch options={options} search={true} name="language" placeholder="Exemple de selecteur"/>
    </main>
}
