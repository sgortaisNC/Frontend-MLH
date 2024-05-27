"use client";
import {useEffect, useState} from "react";
import Select from "react-select";
import TeaserLogement from "@/components/TeaserLogement/TeaserLogement";
import {MapComponent} from "@/components/Map/MapComponent";

export const ListeBiens = ({data}) => {

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
    const [surface, setSurface] = useState(250);
    const [type, setType] = useState('');
    const [rayon, setRayon] = useState(0);
    const [loyer, setLoyer] = useState(1000);

    const [vueListe, setVueListe] = useState(true);

    const [isReady, setIsReady] = useState(false);


    useEffect(() => {

        if (!isReady) {
            const url = new URL(window.location.href);
            if (url.searchParams !== undefined) {
                setVille(url.searchParams.get('ville') || '');
                setNombre(url.searchParams.get('nombre') || '');
                setSurface(url.searchParams.get('surface') || 250);
                setType(url.searchParams.get('type') || '');
                setRayon(url.searchParams.get('rayon') || 50);
                setLoyer(url.searchParams.get('loyer') || 1500);
            }
        }

        fetch(`https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/biens-louer?loyer=${loyer}&ville=${ville}&rayon=${rayon}&type=${type}&surface=${surface}&nombre=${nombre}`).then(r => {
            return r.json();
        }).then(r => {
            setBiens(r.louer);
            setFiltres(r.filtres);

            setIsLoaded(true);
            setIsReady(true);
            if (isLoaded) {
                document.querySelector('.biens_grid')?.scrollIntoView();
            }
        });
    }, [isLoaded]);

    function reset() {
        window.location.reload()
    }

    if (!isReady) return <></>

    const nbPerPage = 12;
    const pageMax = Math.ceil(biens.length / nbPerPage);
    const minNumber = Math.max(0, page - 2);
    const maxNumber = Math.min(pageMax, page + 3);

    const louer = biens.slice(page * nbPerPage, page * nbPerPage + nbPerPage);

    return <>
        <h2><strong className={"text-primary"}>Filtrer</strong> <strong>les biens par :</strong></h2>
        <div className="filtres" style={{marginBottom: '50px'}}>
            <div className="vues">
                <button type={'button'} className={!vueListe ? "active" : ''} onClick={() => setVueListe(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21.375" height="16.626"
                         viewBox="0 0 21.375 16.626">
                        <path
                            d="M6.312-15.4a.577.577,0,0,1,.382-.019L14.81-13.1l5.344-2.137a.89.89,0,0,1,1.221.827V-1.982a.9.9,0,0,1-.56.828l-5.752,2.3a.587.587,0,0,1-.382.019L6.565-1.154,1.221.983A.891.891,0,0,1,0,.156V-12.268a.891.891,0,0,1,.56-.826l5.752-2.3ZM1.188-.282l4.75-1.9V-13.967l-4.75,1.9ZM14.25-12.02,7.125-14.057V-2.23L14.25-.193ZM15.438-.282l4.75-1.9V-13.967l-4.75,1.9Z"
                            transform="translate(0 15.438)" fill="#fff"/>
                    </svg>
                    Carte
                </button>
                <button type={'button'} className={vueListe ? "active" : ''} onClick={() => setVueListe(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18.406" height="15.438"
                         viewBox="0 0 18.406 15.438">
                        <path
                            d="M.594-13.953a.891.891,0,0,1,.891-.891H3.266a.89.89,0,0,1,.891.891v1.781a.888.888,0,0,1-.891.891H1.484a.89.89,0,0,1-.891-.891Zm2.375,1.484v-1.187H1.781v1.188Zm15.438-1.187a.6.6,0,0,1,.594.594.6.6,0,0,1-.594.594H6.531a.6.6,0,0,1-.594-.594.6.6,0,0,1,.594-.594Zm0,5.938A.6.6,0,0,1,19-7.125a.6.6,0,0,1-.594.594H6.531a.6.6,0,0,1-.594-.594.6.6,0,0,1,.594-.594Zm0,5.938A.6.6,0,0,1,19-1.187a.6.6,0,0,1-.594.594H6.531a.6.6,0,0,1-.594-.594.6.6,0,0,1,.594-.594ZM3.266-8.906a.888.888,0,0,1,.891.891v1.781a.888.888,0,0,1-.891.891H1.484a.89.89,0,0,1-.891-.891V-8.016a.89.89,0,0,1,.891-.891ZM1.781-7.719v1.188H2.969V-7.719ZM.594-2.078a.89.89,0,0,1,.891-.891H3.266a.888.888,0,0,1,.891.891V-.3a.888.888,0,0,1-.891.891H1.484A.89.89,0,0,1,.594-.3ZM2.969-.594V-1.781H1.781V-.594Z"
                            transform="translate(-0.594 14.844)" fill="#fff"/>
                    </svg>
                    Liste
                </button>
            </div>

            <form onSubmit={handleForm}>
                <div className="gridBiens">
                    <div className="selecteur">
                        <label htmlFor="">Communes</label>
                        <Select
                            className={'mySelect'}
                            unstyled={true}
                            classNamePrefix={"mySelect"}
                            name="ville"

                            defaultValue={filtres.villes.find(v => v.value === parseInt(ville)) || null}
                            options={filtres.villes}
                            isClearable={true}
                            isSearchable={true}
                            placeholder="Sélectionner"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Autour de la commune : {rayon}km</label>
                        <div className="range">
                            <span>0km</span>
                            <input
                                name={'rayon'}
                                type="range"
                                max={50}
                                min={0}
                                value={rayon}
                                onChange={(e) => setRayon(e.target.value)}
                            />
                            <span>50km</span>
                        </div>

                    </div>

                    <div className="selecteur">
                        <label htmlFor="">Type de biens</label>
                        <div className="checkboxes">
                            <label className={'checkLab'}>
                                <input
                                    type="checkbox"
                                    name={"type"}
                                    value={'7'}
                                    onChange={(e) => {
                                        setType(e.target.value)
                                    }}
                                    {...type === '7' ? {checked: true} : {checked: false}}
                                /> Appartement
                            </label>
                            <label className={'checkLab'}>
                                <input type="checkbox"
                                       name={"type"}
                                       onChange={(e) => {
                                           setType(e.target.value)
                                       }}
                                       value={'8'}
                                       {...type === '8' ? {checked: true} : {checked: false}}
                                /> Maison
                            </label>
                        </div>
                    </div>

                    <div className="selecteur">
                        <label htmlFor="">Nombre de pièces</label>
                        <Select
                            className={'mySelect'}
                            unstyled={true}
                            classNamePrefix={"mySelect"}
                            name="nombre"
                            defaultValue={filtres.nombre_piece.find(v => v.value === parseInt(nombre)) || null}
                            options={filtres.nombre_piece}
                            isClearable={true} isSearchable={true}
                            placeholder="Sélectionner"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Surface : {surface}m²</label>
                        <div className="range">
                            <span>10m²</span>
                            <input
                                type="range"
                                name={"surface"}
                                max={250}
                                min={10}
                                step={10}
                                value={surface}
                                onChange={(e) => setSurface(e.target.value)}
                            />
                            <span>250m²</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Loyer : {loyer}€/mois</label>
                        <div className="range">
                            <span>50€</span>
                            <input
                                type="range"
                                name={"loyer"}
                                step={25}
                                min={50}
                                max={1000}
                                value={loyer}
                                onChange={(e) => setLoyer(e.target.value)}
                            />
                            <span>1000</span>
                        </div>

                    </div>
                </div>
                <div className="bottomAction">
                    <button type={"submit"} className={"btn"}>
                        Recherche
                        <svg xmlns="http://www.w3.org/2000/svg" width="15.751" height="13.5"
                             viewBox="0 0 15.751 13.5">
                            <path
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
            </form>
        </div>

        {vueListe ? <>
            {biens.length === 0 && <h2>Aucun bien ne correspond à votre recherche</h2>}
            <div className="biens_grid">
                {louer.map(bien => <TeaserLogement key={bien.id} bien={bien}/>)}
            </div>

            {biens.length > nbPerPage && <div className={"pagination"}>

                {page > 0 ? <button className={'page-arrow'} onClick={() => {
                    setPage(page - 1);
                    document.querySelector(".biens_grid").scrollIntoView()
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
                                        document.querySelector(".biens_grid").scrollIntoView()
                                    }}>{i + 1}</button>
                        </>
                    )}
                {page < pageMax - 1 ? <button className={'page-arrow'}
                                              onClick={() => {
                                                  setPage(page + 1);
                                                  document.querySelector(".biens_grid").scrollIntoView()
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
    </>
}
