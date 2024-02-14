"use client";
import Titre from "@/components/Titre/Titre";
import {useEffect, useState} from "react";
import SearchResult from "@/components/SearchResult/SearchResult";

export default function Page() {

    const [motCle, setMotCle] = useState(' ')
    const [isLoaded, setIsLoaded] = useState(false);
    const [recherche, setRecherche] = useState(null);

    useEffect(() => {
        if (!isLoaded) {
            let parseURL = (new URLSearchParams(window.location.search)).get('motcle');

            if (parseURL !== null) {
                fetch(`https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/recherche/${parseURL}`)
                    .then(r => r.json())
                    .then(r => {
                        setRecherche(r)
                        setIsLoaded(true);
                    });
            }
        }
    }, [motCle]);

    if (!recherche) return <></>

    return (
        <>


            <Titre titre={`Votre recherche pour "${recherche.s}"`}/>
            <div className="container">
                <h2>{recherche.results.length} résultat{recherche.results.length > 1 ? "s" : null}</h2>

                {recherche.results.map(r => <SearchResult key={r.id} data={r} />)}

                [MANQUE liste complete pour faire la pagination (15 max actuellement)]
            </div>
        </>
    )
}
