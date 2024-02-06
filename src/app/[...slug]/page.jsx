"use client";

import PostNotFound from "@/app/not-found"
import axios, {post} from "axios";
import {useEffect, useState} from "react";

export default function Page({params}) {

    const [page, setPage] = useState({});
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(false)

    const lastSlug = params.slug[params.slug.length - 1]

    useEffect(() => {
        if (!isLoaded) {
            axios.get('http://montlucon.loc/wp-json/wp/v2/pages?slug=' + lastSlug)
                .then((response) => {
                    setIsLoaded(true);

                    if (response.data[0].title) {
                        setPage(response.data[0])
                    } else {
                        setError(true)
                    }
                })
                .catch((e) => {
                    setError(true)
                    setIsLoaded(true);
                });

        }
    }, [isLoaded]);


    return <>
        {isLoaded ? <>
                {!error ? <h1>{lastSlug} {page.title.rendered}</h1> : <PostNotFound/>}
            </>
            : <>Chargement...</>
        }
    </>
}
