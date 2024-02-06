"use client";

import {useEffect, useState} from "react";
import axios from "axios";
import '@wordpress/block-library/build-style/common.css';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/theme.css';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

export default function Page({params}) {

    const [post, setPost] = useState([]);
    const [loaded, setLoaded] = useState(false);

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

    useEffect(() => {
        axios.get(`http://montlucon.loc/wp-json/wp/v2/posts?slug=${params.slug}`).then((response) => {
            setPost(response.data[0]);
            setLoaded(true);
        })
    }, []);


    return <main>
        {!loaded ? <h1>Loading...</h1> : <>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h1>{post.title.rendered}</h1>
            <time>{post.date}</time>
            <div className="wysiwyg" dangerouslySetInnerHTML={{ __html: post.content.rendered}}></div>

            <SelectSearch options={options} search={true} name="language" placeholder="Exemple de selecteur" />

        </>
        }
    </main>
}
