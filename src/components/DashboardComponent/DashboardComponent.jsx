"use client";
import {useEffect, useState} from "react";
import {redirect} from "next/navigation";

export const DashboardComponent = ({contenu}) => {

    const [token, setToken] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (isLoaded && !token) redirect('/connexion');
        setToken(window.localStorage.getItem('token'));
        setIsLoaded(true);
    }, [isLoaded]);

    if (!token) return null;

    console.log(contenu)

    return <>
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
    </>
}
