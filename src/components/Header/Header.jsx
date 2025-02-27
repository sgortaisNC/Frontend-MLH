"use client";
import Image from "next/image";
import Link from "next/link";
import SousMenu from '@/components/SousMenu/SousMenu';
import {useEffect, useState} from "react";


export default function Header({data}) {

    const [search, setSearch] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    function openMenu() {
        setSearch(!search);
        setTimeout(() => {
            document.getElementById('search').focus()
        }, 150)
    }

    function closeMenu() {
        document.querySelector('.header nav').classList.remove('open');
    }

    function dontOpenAnymore(name) {
        return function () {
            localStorage.setItem(name, 'true')
            document.querySelector('.alerte').classList.add('fade');
            setTimeout(() => {
                document.querySelector('.alerte').remove();
            }, 500);
        }
    }

    let alerte = false;

    useEffect(() => {
        if (data.alerte.titre) {
            const alerte = localStorage.getItem(data.alerte.date_debut + "-" + data.alerte.date_fin);
            data.alerte.open = !alerte;
        } else {
            data.alerte.closed = false
        }
        setIsLoaded(true);
    }, [isLoaded]);


    return (<>
            {data.alerte.titre && data.alerte.open ? <div className="alerte">
                <button onClick={dontOpenAnymore(data.alerte.date_debut + "-" + data.alerte.date_fin)}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 384 512" width={20}>
                        <path fill={'currentColor'}
                              d="M338.1 413.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L203.3 256 349.4 109.9c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L192 244.7 45.9 98.6c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L180.7 256 34.6 402.1c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L192 267.3 338.1 413.4z"/>
                    </svg>
                </button>
                <div className="alerte__inner">
                    <div className="text-center">
                        <div className="alerte__title">{data.alerte.titre}</div>
                    </div>
                    <div className="alerte__content" dangerouslySetInnerHTML={{__html: data.alerte.contenu}}></div>
                </div>
            </div> : ''}
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="header__top__grid">
                            <div className="left">
                                <a href="tel:0470052172">
                                    <Image
                                        src="/tel.svg" alt='' height={27} width={27}></Image>
                                    04 70 05 21 72
                                </a>
                                |
                                Du lundi au vendredi - 9H - 12H / 13H - 17H
                            </div>
                            <div className="right">
                                <ul>
                                    <li>
                                        <a href={data.espace ?? "#"} target={"_blank"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27"
                                                 viewBox="0 0 27 27">
                                                <g transform="translate(-1447 -12)">
                                                    <circle cx="13.5" cy="13.5"
                                                            r="13.5"
                                                            transform="translate(1447 12)" fill="#fff"/>
                                                    <path
                                                        d="M7.438-3.937H4.813A4.813,4.813,0,0,0,0,.875a.875.875,0,0,0,.875.875h10.5A.875.875,0,0,0,12.25.875,4.813,4.813,0,0,0,7.438-3.937ZM1.34.438A3.5,3.5,0,0,1,4.813-2.625H7.438A3.505,3.505,0,0,1,10.91.438H1.34ZM6.125-5.25a3.5,3.5,0,0,0,3.5-3.5,3.5,3.5,0,0,0-3.5-3.5,3.5,3.5,0,0,0-3.5,3.5A3.5,3.5,0,0,0,6.125-5.25Zm0-5.687A2.19,2.19,0,0,1,8.313-8.75,2.19,2.19,0,0,1,6.125-6.562,2.19,2.19,0,0,1,3.937-8.75,2.19,2.19,0,0,1,6.125-10.937Z"
                                                        transform="translate(1455 30)" fill="#ac3053"/>
                                                </g>
                                            </svg>
                                            <span>Mon espace locataire</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={data.demande_logement ?? "#"} className={"demandeLogement"} target={"_blank"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27"
                                                 viewBox="0 0 27 27">
                                                <g transform="translate(-1447 -12)">
                                                    <circle cx="13.5" cy="13.5" r="13.5"
                                                            transform="translate(1447 12)" fill="#4b7388"/>
                                                    <path
                                                        d="M8.531-7.719a.812.812,0,0,1,.813-.812.812.812,0,0,1,.813.813.812.812,0,0,1-.812.813A.812.812,0,0,1,8.531-7.719Zm0,5.281a4.349,4.349,0,0,1-.708-.056l-.711.668a.477.477,0,0,1-.409.2H5.688V-.609A.608.608,0,0,1,5.078,0H4.063V1.016a.608.608,0,0,1-.609.609H.609A.609.609,0,0,1,0,1.016V-1.828A.61.61,0,0,1,.178-2.26L4.118-6.2a4.652,4.652,0,0,1-.056-.708,4.469,4.469,0,0,1,4.469-4.469A4.469,4.469,0,0,1,13-6.906,4.469,4.469,0,0,1,8.531-2.437Zm0-1.219a3.25,3.25,0,0,0,3.25-3.25,3.25,3.25,0,0,0-3.25-3.25,3.25,3.25,0,0,0-3.25,3.25,3.138,3.138,0,0,0,.041.515l.1.614L1.2-1.577V.406H2.821V-1.219H4.446V-2.844H6.452l.95-.95.614.1A3.138,3.138,0,0,0,8.531-3.656Z"
                                                        transform="translate(1454 30)" fill="#fff"/>
                                                </g>
                                            </svg>
                                            <span>Faire une demande de logement</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__bottom">
                    <div className="container">
                        <div className="logo">
                            <Link href={"/"}>
                                <Image
                                    src={data.logo ? data.logo.sizes.nc_header : "/logo.png"}
                                    alt='Logo de Montluçon Habitat'
                                    width={data.logo ? data.logo.sizes['nc_header-width'] : 235}
                                    height={data.logo ? data.logo.sizes['nc_header-height'] : 121}/>
                            </Link>
                        </div>
                        <div className="burger"
                             onClick={() => document.querySelector('.header nav').classList.toggle('open')}>
                            <div className="picto">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>Menu</div>
                        </div>
                        <nav onClick={(e) => {
                            if (e.target.tagName === 'NAV' || e.target.tagName === 'A' && document.querySelector('.header nav').classList.contains('open')) {
                                document.querySelector('.header nav').classList.remove('open');
                            }
                        }}>
                            <ul>
                                {data.menu && data.menu.map((item, index) => {
                                    return <li key={index}>
                                        <Link href={item.url}>{item.title}</Link>
                                        {item.niveau2.length > 0 ?
                                            <ul className={"sous-menu"}><SousMenu links={item.niveau2}/></ul> : ''}
                                    </li>
                                })}
                            </ul>
                        </nav>
                        <div className={`header__search ` + (search ? 'active' : '')}>
                            <button aria-label={"Ouvrir le moteur de recherche"} className={"openSearch"} onClick={openMenu}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" width="23.628" height="23.628"
                                    viewBox="0 0 23.628 23.628">
                                    <g id="Groupe_2632" data-name="Groupe 2632"
                                       transform="translate(-1465.941 -156.941)">
                                        <circle id="Ellipse_184" data-name="Ellipse 184" cx="8.626" cy="8.626" r="8.626"
                                                transform="translate(1466.941 157.941)" fill="none" stroke="#fff"
                                                strokeLinecap="round" strokeWidth="2"/>
                                        <path id="Tracé_5049" data-name="Tracé 5049" d="M5.7,5.515-.251-.005"
                                              transform="translate(1482.455 173.641)" fill="none" stroke="#fff"
                                              strokeLinecap="round" strokeWidth="2"/>
                                    </g>
                                </svg>
                            </button>

                            <form action="/recherche/" method={'GET'}>
                                <input id="search" name="motcle" required={true} type="text"
                                       title="Effectuez une recherche par mot-clé"
                                       onBlur={() => {
                                           setTimeout(() => {
                                               setSearch(false)
                                           }, 150)
                                       }}
                                />
                                <button type="submit" className="btn btn--xs">Recherche</button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
