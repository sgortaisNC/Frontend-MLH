import './OffreTeaser.scss';

export default function OffreTeaser({offre}){
    return <a href={offre.lien} className="offre-teaser">
        <div className='offre__header'>

            <div className="offre__title">{offre.titre}</div>
            <div className='offre__ref'>
                <b>Référence</b> #{offre.reference}
            </div>
        </div>
        <ul>
            {offre.contrat && 
                <li>
                    {offre.contrat}
                </li>
            }
            {offre.metier && 
                <li>
                    {offre.metier}
                </li>
            }
            {offre.date && 
                <li>
                    {offre.date}
                </li>
            }
        </ul>

        <span className='offre__link'>En savoir plus 
            <svg xmlns="http://www.w3.org/2000/svg" width="15.751" height="13.5" viewBox="0 0 15.751 13.5">
                <path id="Tracé_15271" data-name="Tracé 15271" d="M1.427-13.267,7.615-7.361a.844.844,0,0,1,.261.611.845.845,0,0,1-.261.611L1.427-.232A.845.845,0,0,1,.234-.261.843.843,0,0,1,.263-1.454L4.928-5.9H-7.031a.845.845,0,0,1-.844-.844.844.844,0,0,1,.844-.843H4.926L.261-12.043a.847.847,0,0,1-.028-1.195A.846.846,0,0,1,1.427-13.267Z" transform="translate(7.875 13.5)" fill="#ac3053"/>
            </svg>
        </span>
    </a>
}


