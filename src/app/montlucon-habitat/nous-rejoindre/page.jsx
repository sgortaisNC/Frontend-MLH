"use client";
import useSWR from "swr";
import PostNotFound from "@/app/not-found";
import OffreTeaser from "@/components/OffreTeaser/OffreTeaser";
import {useState} from "react";
import Titre from "@/components/Titre/Titre";
import Link from "next/link";

const fetcher = url => fetch(url).then(r => r.json())

export default function Page() {
    const [page, setPage] = useState(0)

    const {data, error} = useSWR("https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/offres", fetcher)
    if (error) return <PostNotFound/>
    if (!data) return <></>


    const nbPerPage = 12;
    const pageMax = Math.ceil(data.emplois.length / nbPerPage);
    const minNumber = Math.max(0, page - 2);
    const maxNumber = Math.min(pageMax, page + 3);

    const posts = data.emplois.slice(page * nbPerPage, page * nbPerPage + nbPerPage);


    return <main>
        <Titre titre={`Liste des offres d'emploi`}/>

        <div className="container">
            <div className="spontanee">
            <Link href={"/montlucon-habitat/nous-rejoindre/candidature-spontanee"} className="btn btn--xs btn--green">
                <svg xmlns="http://www.w3.org/2000/svg" width="30.22" height="29.807" viewBox="0 0 30.22 29.807">
                    <g transform="translate(-1329.608 -517.314)">
                        <g transform="translate(1329.908 517.614)">
                            <path d="M28.157,34.489h2.678a.53.53,0,1,0,0-1.059H28.157a.53.53,0,1,0,0,1.059Z" transform="translate(-15.148 -18.069)" fill="#a7c830" stroke="#a7c830" stroke-width="0.6"/>
                            <path d="M36.738,33.959a.529.529,0,0,0,.529.529h7.687a.529.529,0,1,0,0-1.059H37.267A.529.529,0,0,0,36.738,33.959Z" transform="translate(-19.434 -18.069)" fill="#a7c830" stroke="#a7c830" stroke-width="0.6"/>
                            <path d="M28.157,41.15H40.482a.53.53,0,1,0,0-1.059H28.157a.53.53,0,1,0,0,1.059Z" transform="translate(-15.148 -21.203)" fill="#a7c830" stroke="#a7c830" stroke-width="0.6"/>
                            <path d="M31.784,46.752H28.157a.53.53,0,1,0,0,1.059h3.627a.53.53,0,1,0,0-1.059Z" transform="translate(-15.148 -24.338)" fill="#a7c830" stroke="#a7c830" stroke-width="0.6"/>
                            <path d="M42.925,46.752H38.683a.53.53,0,1,0,0,1.059h4.242a.53.53,0,1,0,0-1.059Z" transform="translate(-20.101 -24.338)" fill="#a7c830" stroke="#a7c830" stroke-width="0.6"/>
                            <path d="M32.387,19.541a5.269,5.269,0,1,0,3.38-9.31A5.29,5.29,0,0,0,32.387,19.541Zm.907-.637v-.65a2.487,2.487,0,0,1,4.945,0v.65A4.225,4.225,0,0,1,33.294,18.9Zm2.472-3.932A1.033,1.033,0,1,1,36.8,13.939a1.033,1.033,0,0,1-1.033,1.033Zm0-3.682a4.232,4.232,0,0,1,3.5,6.551,3.306,3.306,0,0,0-1.939-2.523,2.092,2.092,0,1,0-3.123,0,3.3,3.3,0,0,0-1.938,2.524,4.232,4.232,0,0,1,3.5-6.55Z" transform="translate(-16.502 -7.153)" fill="#a7c830" stroke="#a7c830" stroke-width="0.6"/>
                            <g transform="translate(0 0)">
                                <path d="M32.1,4.418H14.538A1.574,1.574,0,0,0,12.966,5.99V22.526a5.781,5.781,0,1,0,.014,9.664,1.569,1.569,0,0,0,1.558,1.436H28.315a1.581,1.581,0,0,0,1.123-.465l3.781-3.839a1.577,1.577,0,0,0,.457-1.146V5.99A1.574,1.574,0,0,0,32.1,4.418ZM5.086,27.362a4.722,4.722,0,1,1,4.722,4.722,4.728,4.728,0,0,1-4.722-4.722Zm8.94,4.691V31.3a5.812,5.812,0,0,0,0-7.883V5.99a.514.514,0,0,1,.513-.513H32.1a.514.514,0,0,1,.513.513V27.645H29.36a1.574,1.574,0,0,0-1.572,1.572v3.35H14.538a.514.514,0,0,1-.513-.513Zm14.821.2V29.216a.514.514,0,0,1,.513-.513h2.981Z" transform="translate(-4.057 -4.418)" fill="#a7c830" stroke="#a7c830" stroke-width="0.6"/>
                                <path d="M6.9,25.835,8.826,27.7l3.239-3.246" transform="translate(-3.896 -2.984)" fill="none" stroke="#a7c830" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                            </g>
                        </g>
                    </g>
                </svg>

                Candidature spontanée
            </Link>
            </div>
            <div id="result" className="actualites__grid" style={{marginBottom: "50px"}}>
                {posts.map(post => <OffreTeaser key={post.id} offre={post}/>)}
            </div>

            {data.emplois.length > nbPerPage && <div className={'pagination'}>

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
        </div>
    </main>;
}
