"use client";

import Titre from "@/components/Titre/Titre";
import {redirect} from 'next/navigation'
import {useEffect, useState} from "react";

function Dashboard() {

    const [token, setToken] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (isLoaded && !token) redirect('/connexion');
        setToken(window.sessionStorage.getItem('token'));
        setIsLoaded(true);
    }, [isLoaded]);

    if (!token) return null;

    return (
        <div>
            <Titre titre={'Dashboard de ' + token}/>
            <div className="container">

                <button className={"btn"} onClick={() => {
                    window.sessionStorage.clear();
                    setToken(null);
                    window.location.reload();
                }}>Se déconnecter
                </button>
                <p>Welcome to your dashboard</p>
            </div>
        </div>
    );
}

export default Dashboard;
