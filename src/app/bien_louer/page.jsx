"use client";

import Select from "react-select";
import TeaserLogement from "@/components/TeaserLogement/TeaserLogement";
import {useEffect, useState} from "react";
import Titre from "@/components/Titre/Titre";
import './listeBiens.scss';
import {MapComponent} from "@/components/Map/MapComponent";


export default function Page() {

    function handleForm(e) {

        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        setPage(0);
        setVille(data.get('ville'));
        setNombre(data.get('nombre'));
        setType(data.get('type'));
        setIsLoaded(false);
        return false;
    }


    const [page, setPage] = useState(0);
    const [filtres, setFiltres] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [biens, setBiens] = useState([]);

    const [ville, setVille] = useState('');
    const [nombre, setNombre] = useState('');
    const [type, setType] = useState('');
    const [rayon, setRayon] = useState('');

    const [vueListe, setVueListe] = useState(true);

    const [defaultFiltres, setDefaultFiltres] = useState(null);


    useEffect(() => {
        fetch(`https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/biens-louer?ville=${ville}&rayon=${rayon}&type=${type}&nombre=${nombre}`).then(r => {
            return r.json();
        }).then(r => {
            setBiens(r.louer);
            setFiltres(r.filtres);
            console.log(r.filtres)
            setDefaultFiltres({
                type: type === "" ? null : {
                    "value": type,
                    "label": r.filtres.types.find(f => f.value === parseInt(type)).label
                },
                nombre: nombre === "" ? null : {
                    "value": nombre,
                    "label": r.filtres.nombre_piece.find(f => f.value === parseInt(nombre)).label
                },
                ville: ville === "" ? null : {
                    "value": ville,
                    "label": r.filtres.villes.find(f => f.value === parseInt(ville)).label
                },
            })

            setIsLoaded(true)
        });
    }, [isLoaded]);


    if (filtres === []) return <></>

    const nbPerPage = 12;
    const pageMax = Math.ceil(biens.length / nbPerPage);
    const minNumber = Math.max(0, page - 2);
    const maxNumber = Math.min(pageMax, page + 3);

    const louer = biens.slice(page * nbPerPage, page * nbPerPage + nbPerPage);

    if (!defaultFiltres) return <></>

    return <div>

        <Titre titre={'Biens à louer'}/>
        <div className="container" style={{marginBottom: '50px'}}>

            <button type={'button'} onClick={() => setVueListe(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21.375" height="16.626" viewBox="0 0 21.375 16.626">
                    <path id="Tracé_15272" data-name="Tracé 15272"
                          d="M6.312-15.4a.577.577,0,0,1,.382-.019L14.81-13.1l5.344-2.137a.89.89,0,0,1,1.221.827V-1.982a.9.9,0,0,1-.56.828l-5.752,2.3a.587.587,0,0,1-.382.019L6.565-1.154,1.221.983A.891.891,0,0,1,0,.156V-12.268a.891.891,0,0,1,.56-.826l5.752-2.3ZM1.188-.282l4.75-1.9V-13.967l-4.75,1.9ZM14.25-12.02,7.125-14.057V-2.23L14.25-.193ZM15.438-.282l4.75-1.9V-13.967l-4.75,1.9Z"
                          transform="translate(0 15.438)" fill="#fff"/>
                </svg>
                Carte
            </button>
            <button type={'button'} onClick={() => setVueListe(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18.406" height="15.438" viewBox="0 0 18.406 15.438">
                    <path id="Tracé_15273" data-name="Tracé 15273"
                          d="M.594-13.953a.891.891,0,0,1,.891-.891H3.266a.89.89,0,0,1,.891.891v1.781a.888.888,0,0,1-.891.891H1.484a.89.89,0,0,1-.891-.891Zm2.375,1.484v-1.187H1.781v1.188Zm15.438-1.187a.6.6,0,0,1,.594.594.6.6,0,0,1-.594.594H6.531a.6.6,0,0,1-.594-.594.6.6,0,0,1,.594-.594Zm0,5.938A.6.6,0,0,1,19-7.125a.6.6,0,0,1-.594.594H6.531a.6.6,0,0,1-.594-.594.6.6,0,0,1,.594-.594Zm0,5.938A.6.6,0,0,1,19-1.187a.6.6,0,0,1-.594.594H6.531a.6.6,0,0,1-.594-.594.6.6,0,0,1,.594-.594ZM3.266-8.906a.888.888,0,0,1,.891.891v1.781a.888.888,0,0,1-.891.891H1.484a.89.89,0,0,1-.891-.891V-8.016a.89.89,0,0,1,.891-.891ZM1.781-7.719v1.188H2.969V-7.719ZM.594-2.078a.89.89,0,0,1,.891-.891H3.266a.888.888,0,0,1,.891.891V-.3a.888.888,0,0,1-.891.891H1.484A.89.89,0,0,1,.594-.3ZM2.969-.594V-1.781H1.781V-.594Z"
                          transform="translate(-0.594 14.844)" fill="#fff"/>
                </svg>
                Liste
            </button>


            <h2><strong>Filtrer</strong> les biens par :</h2>
            <form onSubmit={handleForm}>
                <Select name="type" defaultValue={defaultFiltres.type} options={filtres.types} isClearable={true}
                        isSearchable={true}
                        placeholder="Choisissez un filtre"/>
                <Select name="nombre" defaultValue={defaultFiltres.nombre} options={filtres.nombre_piece}
                        isClearable={true} isSearchable={true}
                        placeholder="Choisissez un filtre"/>
                <Select name="ville" defaultValue={defaultFiltres.ville} options={filtres.villes} isClearable={true}
                        isSearchable={true}
                        placeholder="Choisissez un filtre"/>
                <button type={"submit"} className={"btn"}>Recherche</button>
            </form>

            {vueListe ? <>
                {biens.length === 0 && <p>Aucun bien ne correspond à votre recherche</p>}
                <div className="biens_grid">
                    {louer.map(bien => <TeaserLogement key={bien.id} bien={bien}/>)}
                </div>

                {biens.length > nbPerPage && <div className={"pagination"}>

                    {page > 0 ? <button className={'page-arrow'} onClick={() => {
                        setPage(page - 1);
                        document.getElementById("ariane").scrollIntoView()
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.561" height="37.036"
                             viewBox="0 0 18.561 37.036">
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.564" height="37.124"
                             viewBox="0 0 18.564 37.124">
                            <path
                                d="M23.193-19.121,8-2.246a1.688,1.688,0,0,1-2.383.125A1.69,1.69,0,0,1,5.5-4.507L19.67-20.25,5.5-36A1.694,1.694,0,0,1,5.62-38.38,1.69,1.69,0,0,1,8-38.255l15.187,16.78a1.806,1.806,0,0,1,0,2.353Z"
                                transform="translate(-5.063 38.813)" fill="#4b7388"/>
                        </svg>
                    </button> : null}
                </div>}
            </> : <>
                <MapComponent biens={biens} popup={true}/>
            </>}
        </div>
    </div>

}
