"use client";

import Titre from "@/components/Titre/Titre";
import {redirect} from 'next/navigation'
import {useEffect, useState} from "react";
import useSWR from "swr";
import PostNotFound from "@/app/not-found";
import Image from "next/image";
import ForminatorField from "@/components/ForminatorField/ForminatorField";
const fetcher = url => fetch(url).then(r => r.json())

function Dashboard() {

    const [token, setToken] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const lastSlug = 'espace-administrateur';
    const {data, error} = useSWR(`https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/page/${lastSlug}`, fetcher)

    useEffect(() => {
        if (isLoaded && !token) redirect('/connexion');
        setToken(window.localStorage.getItem('token'));
        setIsLoaded(true);
    }, [isLoaded]);

    if (!token) return null;
    if (error) return <PostNotFound/>
    if (!data) return <></>

    const {titre, chapo, image, contenu, formulaire, formID, documents, liens, ariane} = data[0];

    return (
        <div>
            <Titre titre={titre} chapo={chapo} ariane={ariane} />
            <div className="container">
                <div className="to-right">
                    <button className={"btn btn--xs"} onClick={() => {
                        window.localStorage.clear();
                        setToken(null);
                        window.location.reload();
                    }}>Se déconnecter
                    </button>
                </div>
                <div className="content">
                    <div className="wysiwyg" dangerouslySetInnerHTML={{__html: contenu}}></div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
