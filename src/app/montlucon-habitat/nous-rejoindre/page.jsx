"use client";
import useSWR from "swr";
import PostNotFound from "@/app/not-found";
import OffreTeaser from "@/components/OffreTeaser/OffreTeaser";
import {useEffect, useState} from "react";
import Titre from "@/components/Titre/Titre";
import Link from "next/link";
import Select from "react-select";

const fetcher = url => fetch(url).then(r => r.json())

export default function Page() {
    const [page, setPage] = useState(0)
    const [metier, setMetier] = useState("")
    const [contrat, setContrat] = useState("")
    const [search, setSearch] = useState(true)
    const [offres, setOffres] = useState([])

    useEffect(() => {
        if (search) {
            setPage(0);
            if (metier !== "" || contrat !== "") {
                setOffres(data.emplois.filter((offre) => {
                    if (metier !== "" && contrat !== "") {
                        return offre.metier === metier && offre.contrat === contrat
                    } else if (metier !== "") {
                        return offre.metier === metier
                    } else {
                        return offre.contrat === contrat
                    }
                }))
            } else {
                if (data && data.emplois) {
                    setOffres(data.emplois)
                }
            }


            setSearch(false)
        }
    }, [search]);

    const {data, error} = useSWR("https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/offres", fetcher)

    if (error) return <PostNotFound/>
    if (!data) return <></>

    if (offres.length === 0 && (metier === "" && contrat === "")) {
        setOffres(data.emplois);
    }

    const nbPerPage = 12;
    const pageMax = Math.ceil(offres / nbPerPage);
    const minNumber = Math.max(0, page - 2);
    const maxNumber = Math.min(pageMax, page + 3);

    const posts = offres.slice(page * nbPerPage, page * nbPerPage + nbPerPage);

    function triggerSearch() {
        setSearch(true)
    }

    function reset() {
        window.location.reload();
    }


    return <main>
        <Titre titre={`Liste des offres d'emploi`} ariane={[{label: "Liste des offres d'emploi", url: ''}]}/>

        <div className="container">
            <div className="spontanee">
                <Link href={"/montlucon-habitat/nous-rejoindre/candidature-spontanee"}
                      className="btn btn--xs btn--green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30.22" height="29.807" viewBox="0 0 30.22 29.807">
                        <g transform="translate(-1329.608 -517.314)">
                            <g transform="translate(1329.908 517.614)">
                                <path d="M28.157,34.489h2.678a.53.53,0,1,0,0-1.059H28.157a.53.53,0,1,0,0,1.059Z"
                                      transform="translate(-15.148 -18.069)" fill="#a7c830" stroke="#a7c830"
                                      strokeWidth="0.6"/>
                                <path
                                    d="M36.738,33.959a.529.529,0,0,0,.529.529h7.687a.529.529,0,1,0,0-1.059H37.267A.529.529,0,0,0,36.738,33.959Z"
                                    transform="translate(-19.434 -18.069)" fill="#a7c830" stroke="#a7c830"
                                    strokeWidth="0.6"/>
                                <path d="M28.157,41.15H40.482a.53.53,0,1,0,0-1.059H28.157a.53.53,0,1,0,0,1.059Z"
                                      transform="translate(-15.148 -21.203)" fill="#a7c830" stroke="#a7c830"
                                      strokeWidth="0.6"/>
                                <path d="M31.784,46.752H28.157a.53.53,0,1,0,0,1.059h3.627a.53.53,0,1,0,0-1.059Z"
                                      transform="translate(-15.148 -24.338)" fill="#a7c830" stroke="#a7c830"
                                      strokeWidth="0.6"/>
                                <path d="M42.925,46.752H38.683a.53.53,0,1,0,0,1.059h4.242a.53.53,0,1,0,0-1.059Z"
                                      transform="translate(-20.101 -24.338)" fill="#a7c830" stroke="#a7c830"
                                      strokeWidth="0.6"/>
                                <path
                                    d="M32.387,19.541a5.269,5.269,0,1,0,3.38-9.31A5.29,5.29,0,0,0,32.387,19.541Zm.907-.637v-.65a2.487,2.487,0,0,1,4.945,0v.65A4.225,4.225,0,0,1,33.294,18.9Zm2.472-3.932A1.033,1.033,0,1,1,36.8,13.939a1.033,1.033,0,0,1-1.033,1.033Zm0-3.682a4.232,4.232,0,0,1,3.5,6.551,3.306,3.306,0,0,0-1.939-2.523,2.092,2.092,0,1,0-3.123,0,3.3,3.3,0,0,0-1.938,2.524,4.232,4.232,0,0,1,3.5-6.55Z"
                                    transform="translate(-16.502 -7.153)" fill="#a7c830" stroke="#a7c830"
                                    strokeWidth="0.6"/>
                                <g transform="translate(0 0)">
                                    <path
                                        d="M32.1,4.418H14.538A1.574,1.574,0,0,0,12.966,5.99V22.526a5.781,5.781,0,1,0,.014,9.664,1.569,1.569,0,0,0,1.558,1.436H28.315a1.581,1.581,0,0,0,1.123-.465l3.781-3.839a1.577,1.577,0,0,0,.457-1.146V5.99A1.574,1.574,0,0,0,32.1,4.418ZM5.086,27.362a4.722,4.722,0,1,1,4.722,4.722,4.728,4.728,0,0,1-4.722-4.722Zm8.94,4.691V31.3a5.812,5.812,0,0,0,0-7.883V5.99a.514.514,0,0,1,.513-.513H32.1a.514.514,0,0,1,.513.513V27.645H29.36a1.574,1.574,0,0,0-1.572,1.572v3.35H14.538a.514.514,0,0,1-.513-.513Zm14.821.2V29.216a.514.514,0,0,1,.513-.513h2.981Z"
                                        transform="translate(-4.057 -4.418)" fill="#a7c830" stroke="#a7c830"
                                        strokeWidth="0.6"/>
                                    <path d="M6.9,25.835,8.826,27.7l3.239-3.246" transform="translate(-3.896 -2.984)"
                                          fill="none" stroke="#a7c830" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="1.5"/>
                                </g>
                            </g>
                        </g>
                    </svg>

                    Candidature spontanée
                </Link>
            </div>

            <h2><strong className="text-primary">Filtrer</strong> <strong>les offres par :</strong></h2>
            <div className="filtres">
                <div className="selecteur">
                    <label htmlFor="">Type de contrat</label>
                    <Select
                        className={'mySelect'}
                        unstyled={true}
                        isSearchable={false}
                        classNamePrefix={"mySelect"}
                        placeholder={"Tous les contrats"}
                        onChange={(value) => {
                            setContrat(value.value !== "" ? value.label : "")
                        }} options={[{value: "", label: "Tous les contrats"}, ...data.filtres.contrats]}/>
                </div>
                <div className="selecteur">
                    <label htmlFor="">Métier</label>
                    <Select
                        className={'mySelect'}
                        unstyled={true}
                        classNamePrefix={"mySelect"}
                        isSearchable={false}
                        placeholder={"Tous les métiers"} onChange={(value) => {
                        setMetier(value.value !== "" ? value.label : "")
                    }} options={[{value: "", label: "Tous les métiers"}, ...data.filtres.metiers]}/>
                </div>
                <div className="action">
                    <button className={'btn'} onClick={() => {
                        triggerSearch()
                    }}>Rechercher
                        <svg xmlns="http://www.w3.org/2000/svg" width="15.751" height="13.5" viewBox="0 0 15.751 13.5">
                            <path id="Tracé_15269" data-name="Tracé 15269"
                                  d="M1.427-13.267,7.615-7.361a.844.844,0,0,1,.261.611.845.845,0,0,1-.261.611L1.427-.232A.845.845,0,0,1,.234-.261.843.843,0,0,1,.263-1.454L4.928-5.9H-7.031a.845.845,0,0,1-.844-.844.844.844,0,0,1,.844-.843H4.926L.261-12.043a.847.847,0,0,1-.028-1.195A.846.846,0,0,1,1.427-13.267Z"
                                  transform="translate(7.875 13.5)" fill="currentColor"/>
                        </svg>

                    </button>
                    <button className={"reset"} onClick={() => {
                        reset()
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.879" height="16.875"
                             viewBox="0 0 16.879 16.875">
                            <path
                                  d="M6.986-5.621a.841.841,0,0,0-1.046.573A6.213,6.213,0,0,1-.032-.562a6.221,6.221,0,0,1-5.5-3.375H-2a.844.844,0,0,0,.844-.844.816.816,0,0,0-.812-.844H-7.6a.844.844,0,0,0-.844.844V.844a.844.844,0,0,0,.844.844A.844.844,0,0,0-6.754.844V-2.746A7.9,7.9,0,0,0-.032,1.125,7.915,7.915,0,0,0,7.53-4.546.836.836,0,0,0,6.986-5.621Zm.608-9.566a.845.845,0,0,0-.844.844v3.589A7.9,7.9,0,0,0,0-14.625,7.912,7.912,0,0,0-7.562-8.954.841.841,0,0,0-6.988-7.91a.84.84,0,0,0,1.046-.573A6.219,6.219,0,0,1,0-12.937,6.221,6.221,0,0,1,5.5-9.562H1.969a.846.846,0,0,0-.844.844.846.846,0,0,0,.844.844H7.594a.844.844,0,0,0,.844-.844v-5.625A.843.843,0,0,0,7.594-15.187Z"
                                  transform="translate(8.441 15.188)" fill="#4b7388"/>
                        </svg>
                        Réinitialiser
                    </button>
                </div>
            </div>

            <div id="result" className="actualites__grid" style={{marginBottom: "50px"}}>
                {posts.length > 0 ? posts.map(post => <OffreTeaser key={post.id} offre={post}/>) :
                    <h2>Aucune offre n&apos;est disponible pour le moment.</h2>
                }
            </div>

            {data.emplois.length > nbPerPage && <div className={'pagination'}>

                {page > 0 ? <button className={'page-arrow'} onClick={() => {
                    setPage(page - 1);
                    document.getElementById("ariane").scrollIntoView()
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18.561" height="37.036" viewBox="0 0 18.561 37.036">
                        <path
                            d="M21.505-4.5a1.7,1.7,0,0,1-.125,2.386A1.688,1.688,0,0,1,19-2.243L3.807-19.121a1.694,1.694,0,0,1,0-2.261l15.187-16.78a1.688,1.688,0,0,1,2.383-.125A1.69,1.69,0,0,1,21.5-35.9L7.333-20.25,21.505-4.5Z"
                            transform="translate(-3.375 38.721)" fill="#4b7388"/>
                    </svg>
                </button> : null}

                {Array.from({length: pageMax}, (_, i) => i)
                    .slice(minNumber, maxNumber)
                    .map(
                        (i) => <>
                            <button key={i}
                                    className={'page-number ' + (i === page ? 'current-page' : '')}
                                    onClick={() => {
                                        setPage(i);
                                        document.getElementById("ariane").scrollIntoView()
                                    }}>{i + 1}</button>
                        </>
                    )}
                {page < pageMax - 1 ? <button className={'page-arrow'}
                                              onClick={() => {
                                                  setPage(page + 1);
                                                  document.getElementById("ariane").scrollIntoView()
                                              }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18.564" height="37.124" viewBox="0 0 18.564 37.124">
                        <path
                            d="M23.193-19.121,8-2.246a1.688,1.688,0,0,1-2.383.125A1.69,1.69,0,0,1,5.5-4.507L19.67-20.25,5.5-36A1.694,1.694,0,0,1,5.62-38.38,1.69,1.69,0,0,1,8-38.255l15.187,16.78a1.806,1.806,0,0,1,0,2.353Z"
                            transform="translate(-5.063 38.813)" fill="#4b7388"/>
                    </svg>
                </button> : null}
            </div>}
        </div>
    </main>;
}
