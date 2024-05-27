'use client';
import Select from "react-select";
import {MapComponent} from "@/components/Map/MapComponent";
import {useState} from "react";


export const HomeForm = ({data}) => {

    const [type, setType] = useState('');
    const [rayon, setRayon] = useState(50);
    const [surface, setSurface] = useState(250);
    const [loyer, setLoyer] = useState(1000);

    return (
        <section className="module-search">
            <div className="module-search__grid">
                <div id="map" style={{zIndex: 0}}>
                    <MapComponent biens={data.biensMap} popup={true}/>
                </div>
                <form action={"/bien_louer"} method={"GET"} style={{zIndex: 1}}>
                    <h2>Trouvez facilement le logement <strong>qui vous correspond</strong></h2>
                    <div className="fields">
                        <div className="field">
                            <div className="field__label">
                                <label htmlFor="commune">Commune</label>
                            </div>
                            <div className="field__input">
                                <Select
                                    className={"mySelect"}
                                    instanceId={'wsad123wqwe'}
                                    classNamePrefix={"mySelect"}
                                    unstyled={true}
                                    options={data.filtres.villes}
                                    name={"ville"}
                                    isClearable={true}
                                    isSearchable={true}
                                    placeholder="Sélectionnez une ville"/>
                            </div>
                        </div>
                        <div className="field">
                            <div className="field__label">
                                <label htmlFor="commune">Rayon : {rayon}km</label>
                            </div>
                            <div className="field__input">
                                <div className="range">
                                        <span>
                                            0km
                                        </span>
                                    <input name={'rayon'} type="range" min="0" max="50"
                                           value={rayon}
                                           onChange={(e) => {
                                               setRayon(e.target.value)
                                           }}
                                    />
                                    <span>
                                            50km
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="field__label">
                                <label htmlFor="commune">Type de bien</label>
                            </div>
                            <div className="field__input">
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
                        </div>
                        <div className="field">
                            <div className="field__label">
                                <label htmlFor="commune">Nombre de pièces</label>
                            </div>
                            <div className="field__input">
                                <Select
                                    className={"mySelect"}
                                    instanceId={'azeazeazeaez'}
                                    classNamePrefix={"mySelect"}
                                    unstyled={true}
                                    options={data.filtres.nombre_piece}
                                    isSearchable={true}
                                    isClearable={true}
                                    name="nombre"
                                    placeholder="Exemple de selecteur"/>
                            </div>
                        </div>
                        <div className="field">
                            <div className="field__label">
                                <label htmlFor="commune">Surface : {surface}m²</label>
                            </div>
                            <div className="field__input">
                                <div className="range">
                                    <span>10m²</span>
                                    <input name="surface"
                                           type="range"
                                           min={10}
                                           max={250}
                                           step={10}
                                           value={surface}
                                           onChange={(e) => {
                                               setSurface(e.target.value)
                                           }}
                                    />
                                    <span>250m²</span>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="field__label">
                                <label htmlFor="commune">Loyer : {loyer}€/mois</label>
                            </div>
                            <div className="field__input">
                                <div className="range">
                                    <span>50</span>
                                    <input name={'loyer'}
                                           type="range"
                                           min={50}
                                           max={1500}
                                           step={25}
                                           onChange={(e) => setLoyer(e.target.value)}
                                           value={loyer}/>
                                    <span>1000€</span>
                                </div>
                            </div>
                        </div>
                        <div className="ctas">
                            <button type="submit" className="btn">Rechercher</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
