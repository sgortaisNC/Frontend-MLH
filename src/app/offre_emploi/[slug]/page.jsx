import Titre from "@/components/Titre/Titre";
import Link from "next/link";
import PostNotFound from "@/app/not-found";
import './offre.scss';


function strip(html)
{
    return html.replace(/<[^>]+>/ig,"").replace(/\s+/g, ' ').trim().substring(0, 160)
}
async function getData($slug) {
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_BACK_DNS}/wp-json/montlucon/v1/offre/${$slug}`)

    if (!res.ok) {
        return false;
    }

    return res.json()
}
function decodeHTMLEntities(text) {
    return text.replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&rsquo;/g, "'");
}
export async function generateMetadata({ params, searchParams }, parent) {
    const lastSlug = params.slug;
    const data = (await getData(lastSlug))[0];
    if (!data) return {
        title: "Page non trouvée",
        description: 'Location de logement (appartement et maison) pas cher à Montluçon y compris pour les étudiants.'
    };
    let metas = {
        title: decodeHTMLEntities(data.titre),
        openGraph: {
            title: data.titre,
            images: [
                {
                    url: data.image, // Must be an absolute URL
                    width: 800,
                    height: 600,
                },
            ],
            locale: 'fr_FR',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: data.titre,
            images: [data.image], // Must be an absolute URL
        },
    }
    if (data.chapo || data.contenu) {
        metas.description = data.chapo ?? strip(data.contenu)
        metas.openGraph.description = data.chapo ?? strip(data.contenu)
        metas.twitter.description = data.chapo ?? strip(data.contenu)
    }
    return metas
}

export default async function Page({params}) {

    const data = await getData(params.slug)

    if (!data) return <PostNotFound/>

    const offre = data[0];

    const ariane = [
        {label: "Liste des offres d'emploi", url: '/nous-rejoindre'},
        {label: offre.titre, url: ''}
    ]

    let count = 2;
    if (offre.contrat) {
        count++;
    }
    if (offre.metier) {
        count++;
    }
    if (offre.pdf) {
        count++;
    }


    return (
        <>
            <Titre titre={offre.titre} chapo={offre.chapo} ariane={ariane}/>

            <div className="container" style={{marginBottom: "50px"}}>
                <div className="infos" style={{gridTemplateColumns: `repeat(${count},1fr)`}}>
                    <div className="info">
                        <svg xmlns="http://www.w3.org/2000/svg" width="43.75" height="44.531"
                             viewBox="0 0 43.75 44.531">
                            <path
                                d="M-11.719-33.594a1.567,1.567,0,0,1,1.563,1.563v1.563a1.567,1.567,0,0,1-1.562,1.563h-1.562a1.565,1.565,0,0,1-1.562-1.562v-1.562a1.565,1.565,0,0,1,1.563-1.562Zm3.906-7.031a4.688,4.688,0,0,1,4.688,4.688v9.375a4.689,4.689,0,0,1-4.687,4.688h-9.375a4.688,4.688,0,0,1-4.687-4.687v-9.375a4.687,4.687,0,0,1,4.688-4.687Zm0,3.125h-9.375a1.562,1.562,0,0,0-1.562,1.563v9.375A1.565,1.565,0,0,0-17.187-25h9.375A1.567,1.567,0,0,0-6.25-26.562v-9.375A1.565,1.565,0,0,0-7.812-37.5ZM-14.844-7.031a1.565,1.565,0,0,1,1.563-1.562h1.563a1.567,1.567,0,0,1,1.563,1.563v1.563a1.567,1.567,0,0,1-1.562,1.563h-1.562a1.565,1.565,0,0,1-1.562-1.562Zm7.031-8.594a4.689,4.689,0,0,1,4.688,4.688v9.375A4.689,4.689,0,0,1-7.812,3.125h-9.375a4.688,4.688,0,0,1-4.687-4.687v-9.375a4.688,4.688,0,0,1,4.688-4.687Zm0,3.125h-9.375a1.565,1.565,0,0,0-1.562,1.563v9.375A1.565,1.565,0,0,0-17.187,0h9.375A1.567,1.567,0,0,0-6.25-1.562v-9.375A1.567,1.567,0,0,0-7.812-12.5ZM13.281-33.594a1.567,1.567,0,0,1,1.563,1.563v1.563a1.567,1.567,0,0,1-1.562,1.563H11.719a1.567,1.567,0,0,1-1.562-1.562v-1.562a1.567,1.567,0,0,1,1.563-1.562ZM3.125-35.937a4.688,4.688,0,0,1,4.688-4.687h9.375a4.688,4.688,0,0,1,4.688,4.688v9.375a4.689,4.689,0,0,1-4.687,4.688H7.813a4.689,4.689,0,0,1-4.687-4.687Zm3.125,0v9.375A1.567,1.567,0,0,0,7.813-25h9.375a1.567,1.567,0,0,0,1.563-1.562v-9.375A1.565,1.565,0,0,0,17.188-37.5H7.813A1.565,1.565,0,0,0,6.25-35.937ZM3.125-14.062a1.567,1.567,0,0,1,1.563-1.562h6.25A1.567,1.567,0,0,1,12.5-14.062v6.641h6.25v-6.641a1.567,1.567,0,0,1,1.563-1.562,1.567,1.567,0,0,1,1.563,1.563v8.2A1.567,1.567,0,0,1,20.313-4.3H10.938A1.567,1.567,0,0,1,9.375-5.859V-12.5H6.25V2.344a1.563,1.563,0,0,1-3.125,0ZM9.375,0a1.567,1.567,0,0,1,1.563-1.562H12.5A1.567,1.567,0,0,1,14.063,0V1.563A1.567,1.567,0,0,1,12.5,3.125H10.938A1.567,1.567,0,0,1,9.375,1.563ZM20.313-1.562A1.567,1.567,0,0,1,21.875,0V1.563a1.567,1.567,0,0,1-1.562,1.563H18.75a1.567,1.567,0,0,1-1.562-1.562V0A1.567,1.567,0,0,1,18.75-1.562Z"
                                transform="translate(21.875 40.625)" fill="#04add1"
                            />
                        </svg>
                        <b>Référence</b>
                        <span>{offre.reference}</span>
                    </div>
                    {offre.contrat &&
                        <div className="info">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 640 512" height={50}>
                                <path
                                    fill={'#04add1'}
                                    d="M507.3 4.7c6.2 6.2 6.2 16.4 0 22.6L452.7 81.9c-9 9-21.2 14.1-33.9 14.1H304c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V168c0-8.8 7.2-16 16-16s16 7.2 16 16v24H448c35.3 0 64 28.7 64 64c0 24.5-13.7 45.7-33.9 56.5c1.2 5 1.9 10.2 1.9 15.5c0 29.9-20.5 55-48.3 62.1C428.7 422.6 401.3 448 368 448H237.3c-4.2 0-8.3 1.7-11.3 4.7l-54.6 54.6c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l54.6-54.6c9-9 21.2-14.1 33.9-14.1H368c17.7 0 32-14.3 32-32c0-1.8-.2-3.6-.4-5.4c-.8-4.7 .5-9.5 3.6-13.1s7.6-5.6 12.4-5.6l.4 0c17.7 0 32-14.3 32-32c0-6.1-1.7-11.7-4.6-16.6c-2.7-4.5-3.1-10-.9-14.8s6.5-8.2 11.6-9.2c14.8-2.8 25.9-15.8 25.9-31.4c0-17.7-14.3-32-32-32H336v32c0 35.3-28.7 64-64 64s-64-28.7-64-64V160c0-53 43-96 96-96H418.7c4.2 0 8.3-1.7 11.3-4.7L484.7 4.7c6.2-6.2 16.4-6.2 22.6 0zM125.6 190.3c9.2-24.5 27.6-43.5 50.4-53.8v37.1c-9.1 7.1-16.3 16.7-20.5 27.9l-26.1 69.6c-2.4 6.4-6.2 12.2-11 17.1L27.3 379.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l91.1-91.1c1.6-1.6 2.9-3.6 3.7-5.7l26.1-69.6zm509.8-57.6c6.2 6.2 6.2 16.4 0 22.6L543.6 247c-1.2-12.5-4.7-24.4-10.2-35l79.3-79.3c6.2-6.2 16.4-6.2 22.6 0z"/>
                            </svg>
                            <b>Type de contrat</b>
                            <span>{offre.contrat}</span>
                        </div>
                    }
                    {offre.metier &&
                        <div className="info">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512" height={50}>
                                <path
                                    d="M160 48V96H352V48c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zM128 96V48c0-26.5 21.5-48 48-48H336c26.5 0 48 21.5 48 48V96h64c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64zm240 32H144 64c-17.7 0-32 14.3-32 32v96H176h32 96 32H480V160c0-17.7-14.3-32-32-32H368zM480 288H336v48c0 17.7-14.3 32-32 32H208c-17.7 0-32-14.3-32-32V288H32V416c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V288zm-272 0v48h96V288H208z"
                                    fill={'#04add1'}/>
                            </svg>
                            <b>Métier</b>
                            <span>{offre.metier}</span>
                        </div>
                    }
                    <div className="info">
                        <svg xmlns="http://www.w3.org/2000/svg" width="43.75" height="50" viewBox="0 0 43.75 50">
                            <path id="Tracé_15270" data-name="Tracé 15270"
                                  d="M-10.937-43.75a1.565,1.565,0,0,1,1.563,1.563V-37.5H9.375v-4.687a1.565,1.565,0,0,1,1.563-1.562A1.565,1.565,0,0,1,12.5-42.187V-37.5h3.125a6.253,6.253,0,0,1,6.25,6.25V0a6.256,6.256,0,0,1-6.25,6.25h-31.25A6.253,6.253,0,0,1-21.875,0V-31.25a6.25,6.25,0,0,1,6.25-6.25H-12.5v-4.687A1.565,1.565,0,0,1-10.937-43.75ZM18.75-25h-37.5V0a3.124,3.124,0,0,0,3.125,3.125h31.25A3.122,3.122,0,0,0,18.75,0Zm-3.125-9.375h-31.25A3.124,3.124,0,0,0-18.75-31.25v3.125h37.5V-31.25A3.122,3.122,0,0,0,15.625-34.375Z"
                                  transform="translate(21.875 43.75)" fill="#04add1"/>
                        </svg>
                        <b>Date de publication</b>
                        <span>{offre.date}</span>
                    </div>
                    {offre.pdf &&
                        <div className="info">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512" height={50}>
                                <path
                                    d="M64 480H96v32H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H220.1c12.7 0 24.9 5.1 33.9 14.1L369.9 129.9c9 9 14.1 21.2 14.1 33.9V288H352V192H240c-26.5 0-48-21.5-48-48V32H64C46.3 32 32 46.3 32 64V448c0 17.7 14.3 32 32 32zM351.5 160c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2V144c0 8.8 7.2 16 16 16H351.5zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"
                                    fill={'#04add1'}
                                />
                            </svg>
                            <b>Fiche de poste</b>
                            <a className={'btn btn--xs'} href={offre.pdf.url} target={"_blank"} download={true}>
                                Télécharger le {offre.pdf.subtype}
                            </a>
                        </div>
                    }
                </div>

                <div className="text-center" style={{marginBottom: 50, marginTop: 50}}>
                    <a href={offre.postuler} className={'btn btn--outline'}>Postuler à cette offre</a>
                </div>
                {offre.description && <>
                    <h2>Description</h2>
                    <div className="wysiwyg" dangerouslySetInnerHTML={{__html: offre.description}}></div>
                </>
                }
                <Link href={"/montlucon-habitat/nous-rejoindre"} className={"btn"}>Retour</Link>
            </div>


        </>
    )
}
