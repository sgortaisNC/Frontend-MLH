import './OffreTeaser.scss';

export default function OffreTeaser({offre}) {



    return <a href={offre.lien} className="offre-teaser">
        <div className='offre__header'>
            <div className="offre__title" dangerouslySetInnerHTML={{__html: offre.titre}}></div>
            <div className='offre__ref'>
                <b>Référence</b> #{offre.reference}
            </div>
        </div>
        <ul>
            {offre.contrat &&
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512"
                         width={20}
                    >
                        <path
                            fill={"#04ADD1"}
                            d="M160 48V96H352V48c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zM128 96V48c0-26.5 21.5-48 48-48H336c26.5 0 48 21.5 48 48V96h64c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64zm240 32H144 64c-17.7 0-32 14.3-32 32v96H176h32 96 32H480V160c0-17.7-14.3-32-32-32H368zM480 288H336v48c0 17.7-14.3 32-32 32H208c-17.7 0-32-14.3-32-32V288H32V416c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V288zm-272 0v48h96V288H208z"/>
                    </svg>
                    <span><b>Type de contrat : </b>{offre.contrat}</span>
                </li>
            }
            {offre.metier &&
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 576 512"
                         width={20}
                    >
                        <path
                            fill={"#04ADD1"}
                            d="M320 32H256V96h64V32zM256 0h64c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H256c-17.7 0-32-14.3-32-32V32c0-17.7 14.3-32 32-32zm64 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM208 432c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-26.5-21.5-48-48-48H256c-26.5 0-48 21.5-48 48zM64 64H192V96H64c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H512c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H384V64H512c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64z"/>
                    </svg>
                    <span><b>Métier : </b>{offre.metier}</span>
                </li>
            }
            {offre.date &&
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 448 512"
                         width={20}
                    >
                        <path
                            fill={"#04ADD1"}
                            d="M128 16c0-8.8-7.2-16-16-16s-16 7.2-16 16V64H64C28.7 64 0 92.7 0 128v32 32V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 160 128c0-35.3-28.7-64-64-64H352V16c0-8.8-7.2-16-16-16s-16 7.2-16 16V64H128V16zM32 192H416V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192zM64 96H384c17.7 0 32 14.3 32 32v32H32V128c0-17.7 14.3-32 32-32zm40 160h80c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8V264c0-4.4 3.6-8 8-8zm-40 8v80c0 22.1 17.9 40 40 40h80c22.1 0 40-17.9 40-40V264c0-22.1-17.9-40-40-40H104c-22.1 0-40 17.9-40 40z"/>
                    </svg>
                    <span><b>Publié le : </b>{offre.date}</span>
                </li>
            }
        </ul>

        <span className='offre__link'>En savoir plus 
            <svg xmlns="http://www.w3.org/2000/svg" width="15.751" height="13.5" viewBox="0 0 15.751 13.5">
                <path id="Tracé_15271" data-name="Tracé 15271"
                      d="M1.427-13.267,7.615-7.361a.844.844,0,0,1,.261.611.845.845,0,0,1-.261.611L1.427-.232A.845.845,0,0,1,.234-.261.843.843,0,0,1,.263-1.454L4.928-5.9H-7.031a.845.845,0,0,1-.844-.844.844.844,0,0,1,.844-.843H4.926L.261-12.043a.847.847,0,0,1-.028-1.195A.846.846,0,0,1,1.427-13.267Z"
                      transform="translate(7.875 13.5)" fill="#ac3053"/>
            </svg>
        </span>
    </a>
}


