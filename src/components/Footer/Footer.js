"use client";

import Image from 'next/image';
import Link from "next/link";
import {useState} from "react";

export default function Footer({data}) {
    const [modal, setModal] = useState(false);
    return (
        <footer className="footer">
            {modal && <div className="alerte">
                <button onClick={() => {setModal(false)}}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 384 512" width={20}>
                        <path fill={'currentColor'}
                              d="M338.1 413.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L203.3 256 349.4 109.9c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L192 244.7 45.9 98.6c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L180.7 256 34.6 402.1c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L192 267.3 338.1 413.4z"/>
                    </svg>
                </button>
                <div className="alerte__inner">
                    <div className="text-center">
                        <div className="alerte__title">{"S'inscrire à la newsletter"}</div>
                    </div>
                    <div className="alerte__content">
                        <iframe width="100%" height="450"
                                src="https://571302cd.sibforms.com/serve/MUIFAKclRNV_SEuR4tQ7sLTFuiCjf96oRNzs5j6q5RgYWIZCHqwuhTcubCpZdevUVQ0G-cthiWajV-L7xRXk39F6hEDeN7jEVoi9KakeyPAfSwqrbVWKov5Of3rnaShXKF5Q2Hnk_ufkVZ6p_O7_-Y5xWoz_GNBzGeDNbZ3xnWkiOltBydRcEO07sQNwFl5I5bS_IBpexrFE0mlU"
                                frameBorder="0" scrolling="auto" allowFullScreen
                                style={{
                                    display: "block",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    maxWidth: "100%"
                                }}>
                        </iframe>
                    </div>
                </div>
            </div>}
            <div className="footer__top">
                <div className="container container--flex">
                    <div className="footer__logo">
                        <Image
                            src={data.logo.sizes.nc_footer}
                            alt="Logo de Montluçon Habitat"
                            width={216}
                            height={97}
                        />
                    </div>
                    <div className="footer__coordonnees">
                        <p style={{marginBottom: 10}}>
                            <span dangerouslySetInnerHTML={{__html: data.coordonnees}}></span> <br/>
                            <strong>04 70 05 21 72</strong>
                        </p>
                        <a target={'_blank'}
                           href={"https://www.google.com/maps/search/?api=1&query=" + data.coordonneesMaps}
                           className="btn btn--xs btn--outline">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8.473" height="12.208"
                                 viewBox="0 0 8.473 12.208">
                                <path id="Tracé_12907" data-name="Tracé 12907"
                                      d="M3.736,0A3.735,3.735,0,0,0,0,3.736,10.136,10.136,0,0,0,1.788,8.7a20.544,20.544,0,0,0,1.773,2.43.233.233,0,0,0,.35,0A21.616,21.616,0,0,0,5.685,8.669,10.189,10.189,0,0,0,7.473,3.736,3.735,3.735,0,0,0,3.736,0M3.709,2.319a1.39,1.39,0,1,1-1.39,1.39,1.386,1.386,0,0,1,1.39-1.39"
                                      transform="translate(0.5 0.5)" fill="none" stroke="#4b7388"
                                      strokeWidth="1"></path>
                            </svg>
                            Nous localiser
                        </a>
                    </div>
                    <div className="footer__acces">
                <span className="footer__title">
                    Accès rapides
                </span>
                        <ul>
                            {data.acces_rapide.map((item) => {
                                return <li key={item.id}>
                                    <Link href={item.url}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19.29"
                                             viewBox="0 0 22 19.29">
                                            <path id="Tracé_15236" data-name="Tracé 15236"
                                                  d="M21.166-9.513l-19.25-8.25a1.429,1.429,0,0,0-.541-.15,1.378,1.378,0,0,0-1,.432,1.446,1.446,0,0,0-.23,1.6L4.125-8.25.145-.614A1.375,1.375,0,0,0,.375.944a1.376,1.376,0,0,0,1,.432,1.364,1.364,0,0,0,.541-.111l19.25-8.251A1.374,1.374,0,0,0,22-8.25,1.436,1.436,0,0,0,21.166-9.513Zm-18.291-5.6,13.6,5.827H5.913L2.875-15.109Zm3.037,7.89H16.47L2.875-1.392Z"
                                                  transform="translate(0 17.914)" fill="#ac3053"></path>
                                        </svg>
                                        {item.title}</Link>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="footer__rs">
                <span className="footer__title">
                    Newsletter
                </span>
                        <button className={'btn btn--xs'} onClick={() => {
                            setModal(true)
                        }}>{"Je m'inscris"}
                            <svg xmlns="http://www.w3.org/2000/svg" width="15.751" height="13.5"
                                 viewBox="0 0 15.751 13.5">
                                <path
                                    d="M1.427-13.267,7.615-7.361a.844.844,0,0,1,.261.611.845.845,0,0,1-.261.611L1.427-.232A.845.845,0,0,1,.234-.261.843.843,0,0,1,.263-1.454L4.928-5.9H-7.031a.845.845,0,0,1-.844-.844.844.844,0,0,1,.844-.843H4.926L.261-12.043a.847.847,0,0,1-.028-1.195A.846.846,0,0,1,1.427-13.267Z"
                                    transform="translate(7.875 13.5)" fill="currentColor"></path>
                            </svg>
                        </button>

                        <ul className="inline-list">
                            {data.social.x ?
                                <li><a href={data.social.x} target='_blank' className="rs">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20.782" height="18.767"
                                         viewBox="0 0 20.782 18.767">
                                        <path
                                            d="M15.319,0H18.5L11.51,7.964l8.171,10.8H13.269L8.249,12.2,2.5,18.767H-.685l7.41-8.518L-1.1,0H5.472l4.536,6ZM14.2,16.9H15.97L4.544,1.8h-1.9Z"
                                            transform="translate(1.1)" fill="#4b7388"></path>
                                    </svg>
                                </a></li>
                                : ''}

                            {data.social.linkedin ?
                                <li><a href={data.social.linkedin} target='_blank' className="rs">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17.675" height="17.799"
                                         viewBox="0 0 17.675 17.799">
                                        <path
                                            d="M2712.242-154.052q1.181,0,2.363,0c.5,0,.708-.209.708-.721q0-2.7,0-5.394a3.625,3.625,0,0,1,.416-1.735,1.821,1.821,0,0,1,1.944-1,1.665,1.665,0,0,1,1.486,1.192,4.027,4.027,0,0,1,.216,1.379c0,1.872,0,3.745,0,5.617a.579.579,0,0,0,.649.664q1.27.006,2.542,0a.578.578,0,0,0,.656-.656c0-1.984.007-3.968-.01-5.951a8.481,8.481,0,0,0-.488-3.062,3.5,3.5,0,0,0-2.133-2.164,5.6,5.6,0,0,0-2.617-.213,3.843,3.843,0,0,0-1.7.608,5.231,5.231,0,0,0-.96.911c0-.244,0-.487,0-.731a.594.594,0,0,0-.669-.672q-1.2,0-2.407,0c-.474,0-.691.217-.691.7q0,5.272,0,10.543C2711.546-154.265,2711.761-154.053,2712.242-154.052Z"
                                            transform="translate(-2705.549 171.85)" fill="#4b7388"></path>
                                        <path
                                            d="M2593.3-161.45c0-.5-.224-.723-.719-.723q-1.148,0-2.294,0c-.523,0-.747.223-.747.744q0,5.226,0,10.451c0,.508.224.733.733.734q1.126,0,2.25,0c.578,0,.776-.2.776-.777v-5.17Q2593.3-158.82,2593.3-161.45Z"
                                            transform="translate(-2588.994 168.042)" fill="#4b7388"></path>
                                        <path
                                            d="M2579.8-288.6a2.432,2.432,0,0,0,2.439-2.408,2.439,2.439,0,0,0-2.426-2.447,2.429,2.429,0,0,0-2.433,2.412A2.419,2.419,0,0,0,2579.8-288.6Z"
                                            transform="translate(-2577.376 293.458)" fill="#4b7388"></path>
                                    </svg>
                                </a></li>
                                :
                                ''
                            }
                            {data.social.facebook ?
                                <li><a href={data.social.facebook} target='_blank' className="rs">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10.981" height="20.318"
                                         viewBox="0 0 10.981 20.318">
                                        <path
                                            d="M-404.485,43.933c0-2.691,0-5.382-.007-8.073,0-.168.044-.2.206-.2.926.009,1.851,0,2.777,0,.384,0,.524-.141.525-.527q0-1.547,0-3.094c0-.406-.142-.547-.549-.547q-1.4,0-2.8,0c-.1,0-.165,0-.163-.141.01-.694,0-1.388.012-2.083a1.331,1.331,0,0,1,.15-.629,1.024,1.024,0,0,1,.9-.491c.679-.063,1.361-.019,2.042-.029.394-.006.534-.141.534-.539q0-1.428,0-2.856c0-.39-.148-.535-.541-.535l-2.44,0a6.138,6.138,0,0,0-1.26.121,4.4,4.4,0,0,0-2.464,1.37,4.842,4.842,0,0,0-1.194,3.115c-.037.838-.018,1.679-.012,2.519,0,.152-.041.184-.187.182-.787-.008-1.574,0-2.36,0-.367,0-.519.15-.52.515q0,1.567,0,3.134c0,.379.146.518.533.519.773,0,1.547.007,2.32,0,.181,0,.214.049.213.219-.006,2.684,0,5.369-.008,8.053a.593.593,0,0,0,.288.579h3.69A.553.553,0,0,0-404.485,43.933Z"
                                            transform="translate(411.837 -24.189)" fill="#4b7388"></path>
                                    </svg>
                                </a></li>
                                : ''
                            }
                            {data.social.instagram ?
                                <li>
                                    <a href={data.social.instagram} target='_blank' className="rs">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19.261" height="19.256"
                                             viewBox="0 0 19.261 19.256">
                                            <path
                                                d="M9.629-13.191A4.929,4.929,0,0,0,4.692-8.254,4.929,4.929,0,0,0,9.629-3.317a4.929,4.929,0,0,0,4.937-4.937A4.929,4.929,0,0,0,9.629-13.191Zm0,8.147a3.216,3.216,0,0,1-3.21-3.21,3.213,3.213,0,0,1,3.21-3.21,3.213,3.213,0,0,1,3.21,3.21,3.216,3.216,0,0,1-3.21,3.21Zm6.291-8.349a1.149,1.149,0,0,1-1.152,1.152,1.149,1.149,0,0,1-1.152-1.152,1.152,1.152,0,0,1,1.152-1.152A1.152,1.152,0,0,1,15.92-13.393Zm3.27,1.169a5.7,5.7,0,0,0-1.555-4.035A5.736,5.736,0,0,0,13.6-17.815c-1.59-.09-6.355-.09-7.945,0A5.728,5.728,0,0,0,1.62-16.264,5.717,5.717,0,0,0,.064-12.229c-.09,1.59-.09,6.355,0,7.945A5.7,5.7,0,0,0,1.62-.249,5.744,5.744,0,0,0,5.655,1.306c1.59.09,6.355.09,7.945,0A5.7,5.7,0,0,0,17.634-.249,5.736,5.736,0,0,0,19.19-4.284c.09-1.59.09-6.351,0-7.941ZM17.136-2.578a3.25,3.25,0,0,1-1.83,1.83c-1.268.5-4.275.387-5.676.387S5.216-.249,3.953-.748a3.25,3.25,0,0,1-1.83-1.83c-.5-1.268-.387-4.275-.387-5.676s-.112-4.413.387-5.676a3.25,3.25,0,0,1,1.83-1.83c1.268-.5,4.275-.387,5.676-.387s4.413-.112,5.676.387a3.25,3.25,0,0,1,1.83,1.83c.5,1.268.387,4.275.387,5.676S17.639-3.841,17.136-2.578Z"
                                                transform="translate(0.003 17.883)" fill="#4b7388"></path>
                                        </svg>
                                    </a>
                                </li> : ''}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container container--flex">
                    <ul>
                        {data.menu.map((item) => {
                            return <li key={item.id}>
                                <Link href={item.url}>{item.title}</Link>
                            </li>
                        })}
                    </ul>
                    <a href="https://www.net-com.fr/" target={"_blank"}>Net.Com 2023</a>
                </div>
            </div>
        </footer>
    );
}
