"use client";

import SearchResult from "@/components/SearchResult/SearchResult";
import {useState} from "react";

export const GlobalSearch = ({recherche}) => {
    const [page, setPage] = useState(0)

    if (!recherche) return <></>

    const nbPerPage = 15;
    const pageMax = Math.ceil(recherche.results.length / nbPerPage);
    const minNumber = Math.max(0, page - 2);
    const maxNumber = Math.min(pageMax, page + 3);

    const posts = recherche.results.slice(page * nbPerPage, page * nbPerPage + nbPerPage);

    return <>
        <h2>{recherche.results.length} résultat{recherche.results.length > 1 ? "s" : null}</h2>

        {posts.map((r,index) => <SearchResult key={index} data={r} />)}

        {recherche.results.length > nbPerPage && <div className={'pagination'}>

            {page > 0 ? <button className={'page-arrow'} onClick={() => {setPage(page - 1); document.getElementById("ariane").scrollIntoView() }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18.561" height="37.036" viewBox="0 0 18.561 37.036">
                    <path d="M21.505-4.5a1.7,1.7,0,0,1-.125,2.386A1.688,1.688,0,0,1,19-2.243L3.807-19.121a1.694,1.694,0,0,1,0-2.261l15.187-16.78a1.688,1.688,0,0,1,2.383-.125A1.69,1.69,0,0,1,21.5-35.9L7.333-20.25,21.505-4.5Z"
                          transform="translate(-3.375 38.721)" fill="#4b7388" />
                </svg>
            </button> : null}

            {Array.from({length: pageMax}, (_, i) => i)
                .slice(minNumber, maxNumber)
                .map(
                    (i) => <>
                        <button key={i}
                                className={'page-number ' + (i === page ? 'current-page' : '')}
                                onClick={() => {setPage(i); document.getElementById("ariane").scrollIntoView()}}>{i + 1}</button>
                    </>
                )}
            {page < pageMax - 1 ? <button className={'page-arrow'}
                                          onClick={() => {setPage(page + 1); document.getElementById("ariane").scrollIntoView()}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18.564" height="37.124" viewBox="0 0 18.564 37.124">
                    <path d="M23.193-19.121,8-2.246a1.688,1.688,0,0,1-2.383.125A1.69,1.69,0,0,1,5.5-4.507L19.67-20.25,5.5-36A1.694,1.694,0,0,1,5.62-38.38,1.69,1.69,0,0,1,8-38.255l15.187,16.78a1.806,1.806,0,0,1,0,2.353Z"
                          transform="translate(-5.063 38.813)" fill="#4b7388"/>
                </svg>
            </button> : null}
        </div>}
    </>
}
