"use client";

import Select from "react-select";
import TeaserLogement from "@/components/TeaserLogement/TeaserLogement";
import {useEffect, useState} from "react";
import { useSearchParams } from 'next/navigation'



export default function Page() {
    function handleForm(e) {

        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
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

    const [ville, setVille] = useState( '');
    const [nombre, setNombre] = useState('');
    const [type, setType] = useState('');
    const [rayon, setRayon] = useState('');

    const [defaultFiltres, setDefaultFiltres] = useState(null);



    useEffect(() => {
        fetch(`https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/biens-louer?ville=${ville}&rayon=${rayon}&type=${type}&nombre=${nombre}`).then(r => {
            return r.json();
        }).then(r => {
            setBiens(r.louer);
            setFiltres(r.filtres);
            console.log(r.filtres)
            setDefaultFiltres({
                type: type === "" ? null : {"value": type, "label": r.filtres.types.find(f => f.value === parseInt(type)).label},
                nombre: nombre === "" ? null : {"value": nombre, "label": r.filtres.nombre_piece.find(f => f.value === parseInt(nombre)).label},
                ville: ville === "" ? null : {"value": ville, "label": r.filtres.villes.find(f => f.value === parseInt(ville)).label},
            })

            setIsLoaded(true)
        });
    }, [isLoaded]);


    if (!filtres === []) return <></>

    const nbPerPage = 1;
    const pageMax = Math.ceil(biens.length / nbPerPage);
    const minNumber = Math.max(0, page - 2);
    const maxNumber = Math.min(pageMax, page + 3);

    const louer = biens.slice(page * nbPerPage, page * nbPerPage + nbPerPage);

    if  (!defaultFiltres) return <></>

    return <div>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        <h1>Biens à louer</h1>
        <div>
            <h2>Filtres</h2>
            <form onSubmit={handleForm}>
                <Select name="type" defaultValue={defaultFiltres.type} options={filtres.types} isClearable={true} isSearchable={true}
                        placeholder="Choisissez un filtre"/>
                <Select name="nombre" defaultValue={defaultFiltres.nombre} options={filtres.nombre_piece} isClearable={true} isSearchable={true}
                        placeholder="Choisissez un filtre"/>
                <Select name="ville" defaultValue={defaultFiltres.ville} options={filtres.villes} isClearable={true} isSearchable={true}
                        placeholder="Choisissez un filtre"/>
                <button type={"submit"} className={"btn"}>Recherche</button>
            </form>
        </div>

        <br/><br/><br/><br/>

        {louer.map(bien => <TeaserLogement key={bien.id} bien={bien}/>)}

        {biens.length > nbPerPage && <div>

            {page > 0 ? <button className={'btn'} onClick={() => setPage(page - 1)}>Précédent</button> : null}
            {Array.from({length: pageMax}, (_, i) => i)
                .slice(minNumber, maxNumber)
                .map(
                    (i) => <>
                        <button key={i}
                                className={'btn ' + (i === page ? 'btn--outline' : '')}
                                onClick={() => setPage(i)}>{i + 1}</button>
                    </>)}
            {page < pageMax - 1 ? <button className={'btn'}
                                          onClick={() => setPage(page + 1)}>Suivant</button> : null}

        </div>}
    </div>

}
