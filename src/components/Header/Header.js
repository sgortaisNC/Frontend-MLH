"use client";
import Image from "next/image";
import Link from "next/link";
import SousMenu from '@/components/SousMenu/SousMenu';
import {useEffect, useState} from "react";
import axios from "axios";

export default function Header() {

    const [options, setOptions] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!isLoaded) {
            axios.get("https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/options/header").then((response) => {
                setOptions(response.data);
                setIsLoaded(true);
            })
        }
    }, [isLoaded])

    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="header__top__grid">
                        <div className="left">
                            <a href="">
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
                                    <a href={options.espace ?? "#"} target={"_blank"}>
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
                                    <a href={options.demande_logement ?? "#"} target={"_blank"}>
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
                                src={options.logo ? options.logo.sizes.nc_header : "/logo.png"}
                                alt='Logo de Montluçon Habitat'
                                width={options.logo ? options.logo.sizes['nc_header-width'] : 235}
                                height={options.logo ? options.logo.sizes['nc_header-height'] : 121}/>
                        </Link>
                    </div>
                    <div className="burger">
                        <div className="picto">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div>Menu</div>
                    </div>
                    <nav>
                        <ul>
                            {options.menu && options.menu.map((item, index) => {
                                return <li key={index}>
                                    <Link href={item.url}>{item.title}</Link>
                                    {item.niveau2 !== [] ? <ul><SousMenu links={item.niveau2} /></ul> : ''}
                                </li>
                            })}
                        </ul>
                    </nav>
                    <div className="header__search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23.628" height="23.628"
                             viewBox="0 0 23.628 23.628">
                            <g id="Groupe_2632" data-name="Groupe 2632" transform="translate(-1465.941 -156.941)">
                                <circle id="Ellipse_184" data-name="Ellipse 184" cx="8.626" cy="8.626" r="8.626"
                                        transform="translate(1466.941 157.941)" fill="none" stroke="#fff"
                                        strokeLinecap="round" strokeWidth="2"/>
                                <path id="Tracé_5049" data-name="Tracé 5049" d="M5.7,5.515-.251-.005"
                                      transform="translate(1482.455 173.641)" fill="none" stroke="#fff"
                                      strokeLinecap="round" strokeWidth="2"/>
                            </g>
                        </svg>

                        <form action="">
                            <input type="text" title="Effectuez une recherche par mot-clé"/>
                            <button type="submit" className="btn btn--xs">Recherche</button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}
