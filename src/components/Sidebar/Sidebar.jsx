import "./Sidebar.scss";
export default function Sidebar({documents, liens}) {
    return (
        <div className={'sidebar'}>
            {documents.length > 0 && <div className={"sidebar-block"}>
                <h3>Documents</h3>
                <ul>
                    {documents.map((doc, i) => <li key={i}><a target={'_blank'} href={doc.lien}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.101" height="25.449"
                             viewBox="0 0 20.101 25.449">
                            <g transform="translate(-259.629 -672.64)">
                                <path d="M6.1,24.949H17.934A1.672,1.672,0,0,0,19.6,23.282V2.167A1.672,1.672,0,0,0,17.934.5H2.167A1.672,1.672,0,0,0,.5,2.167V19.346Z"
                                      transform="translate(259.629 672.64)" fill="none" stroke="#ac3053"
                                      strokeMiterlimit="10" strokeWidth="1"/>
                                <path d="M1.5,74.5H6.848v5.6"
                                      transform="translate(258.884 617.486)" fill="none" stroke="#ac3053"
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                <line id="Ligne_825" data-name="Ligne 825" x2="10.951"
                                      transform="translate(264.204 678.488)" fill="none" stroke="#ac3053"
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                <line id="Ligne_826" data-name="Ligne 826" x2="10.951"
                                      transform="translate(264.204 682.563)" fill="none" stroke="#ac3053"
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                                <line id="Ligne_827" data-name="Ligne 827" x2="5.348"
                                      transform="translate(264.204 686.638)" fill="none" stroke="#ac3053"
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                            </g>
                        </svg>
                        <span>{doc.titre}</span>
                    </a></li>)}
                </ul>
            </div>
            }

            {liens.length > 0 && <div className={"sidebar-block"}>
                <h3>Liens utiles</h3>
                <ul>
                    {liens.map((lien, i) => <li key={i}><a target={'_blank'} href={lien.url}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.963" height="30.823"
                             viewBox="0 0 29.963 30.823">
                            <g transform="translate(20.608) rotate(43)">
                                <path d="M.5,11.86V6.4a5.9,5.9,0,0,1,11.792,0V11.86a5.913,5.913,0,0,1-5.9,5.9"
                                      fill="none" stroke="#ac3053" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="1"/>
                                <path d="M12.292,47.981v5.465a5.9,5.9,0,0,1-11.792,0V47.981a5.913,5.913,0,0,1,5.9-5.9"
                                      transform="translate(0 -29.625)" fill="none" stroke="#ac3053"
                                      strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                            </g>
                        </svg>
                        {lien.titre}
                    </a></li>)}
                </ul>
            </div>}
        </div>
    )
}
