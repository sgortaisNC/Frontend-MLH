
import Image from 'next/image'
import Link from "next/link";
import TeaserLogement from "@/components/TeaserLogement/TeaserLogement";
import TeaserActu from "@/components/Teaseractu/TeaserActu";
import Chiffre from "@/components/Chiffre/Chiffre";
import {HomeForm} from "@/components/HomeForm/HomeForm";

export async function generateMetadata({ params, searchParams }, parent) {
    const data = await getData();
    let metas = {
        title: {
            absolute: 'Montluçon Habitat, tout le monde a droit d`apprécier son logement'
        },
        openGraph: {
            title: 'Montluçon Habitat, tout le monde a droit d`apprécier son logement',
            images: [
                {
                    url: data.baseline.image, // Must be an absolute URL
                    width: 800,
                    height: 600,
                },
            ],
            locale: 'fr_FR',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: "Montluçon Habitat, tout le monde a droit d`apprécier son logement",
            images: [data.baseline.image], // Must be an absolute URL
        },
    }

    let desc = 'Location de logement (appartement et maison) pas cher à Montluçon y compris pour les étudiants.';

    metas.description = desc;
    metas.openGraph.description = desc;
    metas.twitter.description = desc;

    return metas
}
async function getData() {
    const res = await fetch("https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/options/homepage", {cache: "no-cache"});

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Home() {

    const data = await getData();

    if (!data) return <></>
    return (
        <main className={"home"}>
            <section className="hero">
                <Image priority={true} src={data.baseline.image} width={1920} height={717}
                       alt=""/> :
                <div className="container">
                    <h1>
                        <span className="first-line">{data.baseline.ligne1}</span>
                        <span className="second-line">
                            {data.baseline.ligne2}
                            <svg xmlns="http://www.w3.org/2000/svg" width="64.775" height="64.865"
                                 viewBox="0 0 64.775 64.865">
                      <path
                          d="M138.585,12.807c.353.91.632,1.849.957,2.77.05.141.035.34.232.4a1.039,1.039,0,0,0,.317-.385c.7-1.061,1.36-2.155,2.113-3.179,1.686-2.294,3.627-4.258,6.555-4.936a7.125,7.125,0,0,1,1.784-.25,7.32,7.32,0,0,1,3.932,1.312,17.93,17.93,0,0,1,2.46,2.116,10.558,10.558,0,0,1,1.771,2.24,5.482,5.482,0,0,1,.871,2.876,1.935,1.935,0,0,1-1.487,2.065q-2.009.7-4.02,1.385-3.944,1.354-7.888,2.707c-1.149.4-2.293.809-3.438,1.22-.545.2-.542.2-.367.733.228.689.427,1.386.686,2.067.46,1.212.851,2.451,1.278,3.675.167.48.176.477.662.31q2.9-1,5.8-1.993,4.179-1.435,8.358-2.87a18.574,18.574,0,0,0,2.331-.862,8.965,8.965,0,0,0,5.268-8.033,12.386,12.386,0,0,0-1.763-6.81,20.093,20.093,0,0,0-5.843-6.338A15.086,15.086,0,0,0,152.22.175,3.242,3.242,0,0,1,151.14,0h-1.992c-.056.093-.151.087-.241.1-.51.073-1.025.126-1.53.227a14.655,14.655,0,0,0-8.432,4.89,27.782,27.782,0,0,0-1.915,2.768.306.306,0,0,0-.014.312c.623,1.468.993,3.024,1.569,4.509"
                          transform="translate(-105.365 -0.001)" fill="#a7c830"/>
                      <path
                          d="M47.052,165.241c.027-.3-.11-.381-.391-.38-2.194.008-4.389,0-6.583.006-.4,0-.421.013-.418.453a8.721,8.721,0,0,1-.384,2.313,5.987,5.987,0,0,1-1.3,2.419,12.244,12.244,0,0,1-3.2,2.69,7.112,7.112,0,0,1-7.584.037,13.212,13.212,0,0,1-2.123-1.572,12.076,12.076,0,0,1-2.7-3.4,4.983,4.983,0,0,1-.632-2.927,1.792,1.792,0,0,1,1.218-1.552c1.7-.651,3.444-1.172,5.155-1.791,2.334-.844,4.7-1.6,7.046-2.408,1.183-.406,2.36-.833,3.536-1.26.4-.144.39-.157.268-.56-.327-1.083-.79-2.119-1.107-3.208-.262-.9-.6-1.779-.912-2.666-.161-.461-.168-.466-.619-.313-1.289.438-2.575.883-3.863,1.325-2.557.877-5.121,1.737-7.67,2.638a54.224,54.224,0,0,0-5.325,1.948,10.609,10.609,0,0,0-2.342,1.643,7.166,7.166,0,0,0-1.077,1.391,9.652,9.652,0,0,0-1.5,6.482,9.331,9.331,0,0,0,.761,3.077,17.373,17.373,0,0,0,.978,2.127,20.72,20.72,0,0,0,3.412,4.263,18.538,18.538,0,0,0,6.057,4.032,14.576,14.576,0,0,0,2.162.655,14.806,14.806,0,0,0,9.19-.966,12.192,12.192,0,0,0,2.17-1.208c.039-.027.074-.054.111-.076v0s6.652-3.813,7.667-13.217"
                          transform="translate(-11.15 -116.178)" fill="#a7c830"/>
                      <path
                          d="M178.546,143.73a14.441,14.441,0,0,0-5.536-5.592,1.557,1.557,0,0,0-1.407-.123c-2.281.785-4.549,1.609-6.851,2.332-.1.032-.211.075-.236.207a1.109,1.109,0,0,0,.379.311c1.844,1.271,3.85,2.316,5.37,4.036.41.464.868.893,1.24,1.394a10.618,10.618,0,0,1,.916,1.568,6.831,6.831,0,0,1-.133,6.821,13.428,13.428,0,0,1-3.867,4.28,7.2,7.2,0,0,1-2.836,1.322,2.977,2.977,0,0,1-2.2-.273.711.711,0,0,1-.279-.239,6.64,6.64,0,0,1-.824-1.828c-.136-.537-.308-1.059-.487-1.579-.248-.723-.523-1.437-.775-2.159-.12-.343-.21-.7-.32-1.044-.308-.975-.721-1.915-1.028-2.888q-.431-1.367-.9-2.722a12.048,12.048,0,0,1-.471-1.2,25.5,25.5,0,0,0-.992-2.925c-.16-.453-.18-.454-.641-.3-1.393.474-2.783.956-4.176,1.43-.695.236-1.4.454-2.118.768.455,1,.669,2.048,1.053,3.036.469,1.208.854,2.448,1.274,3.674.433,1.261.87,2.52,1.294,3.784q.464,1.382.922,2.765c.3.9.635,1.792.954,2.687a9.411,9.411,0,0,0,3.1,4.4,8.653,8.653,0,0,0,3.411,1.639,11.24,11.24,0,0,0,5.356-.114,11.667,11.667,0,0,0,3.068-1.189,13.315,13.315,0,0,0,3.594-2.705,7.345,7.345,0,0,0,1.675-1.643,17.717,17.717,0,0,0,3.076-4.616,14.411,14.411,0,0,0,1.291-5.9,14.748,14.748,0,0,0-1.9-7.411"
                          transform="translate(-115.675 -106.075)" fill="#a7c830"/>
                      <path
                          d="M5.315,42.618A18.607,18.607,0,0,0,7.449,44.1a1.458,1.458,0,0,0,1.357.123c2.278-.792,4.565-1.556,6.849-2.331a.38.38,0,0,0,.277-.218,1.7,1.7,0,0,0-.5-.38c-1.1-.739-2.227-1.448-3.309-2.215a13.06,13.06,0,0,1-3.756-4.009,7.165,7.165,0,0,1-.546-6.925,10.265,10.265,0,0,1,1.467-2.272A12.159,12.159,0,0,1,13.468,22.4a5.052,5.052,0,0,1,2.236-.544,1.929,1.929,0,0,1,2.072,1.477q.773,2.234,1.539,4.471.66,1.922,1.318,3.844c.414,1.212.82,2.428,1.241,3.638q.617,1.774,1.26,3.539c.155.427.17.432.594.287q2.923-1,5.843-2.01c.464-.161.452-.166.3-.672-.356-1.172-.838-2.3-1.2-3.469-.408-1.327-.9-2.626-1.343-3.945C26.9,27.728,26.4,26.469,26,25.176c-.286-.924-.7-1.813-.97-2.734a15.721,15.721,0,0,0-1.181-3.055,8.539,8.539,0,0,0-4.776-4.147,11.34,11.34,0,0,0-9.326.936,19.263,19.263,0,0,0-6.2,5.342A15.17,15.17,0,0,0,.065,32.628a15.554,15.554,0,0,0,.647,3.245,12.035,12.035,0,0,0,.939,2.2,15.362,15.362,0,0,0,3.664,4.548"
                          transform="translate(0 -11.249)" fill="#a7c830"/>
                    </svg>
                </span>
                        <span className="third-line">{data.baseline.ligne3}</span>
                    </h1>
                </div>
            </section>
            <div className="container">
                <section className="biens">
                    <h2><strong>Disponibles</strong> à la location</h2>
                    {data.biens.map((data) => <TeaserLogement key={data.id} bien={data}/>)}
                    <div className="biens__cta">
                        <Link href="/bien_louer" className="btn">Tous les logements à louer</Link>
                    </div>
                </section>
            </div>
            <HomeForm data={data}/>
            <section className="actualites">
                <div className="container">
                    <div className="actualites__title">
                        <h2>Dans l&apos;<strong>actualité</strong></h2>
                        <Link href="/actualites" className="btn">Toutes les actualités</Link>
                    </div>
                    <div className="actualites__grid">
                        {data.actualites.map((data) => <TeaserActu key={data.id} actu={data}/>)}
                    </div>
                </div>
            </section>

            <section className="keys">
                <div className="container">
                    <div className="bg-svg">
                        <svg className="bg" xmlns="http://www.w3.org/2000/svg" width="1919.829" height="87.547"
                             viewBox="0 0 1919.829 87.547">
                            <path d="M10796,5000.064l-1317.783-66.416L8876.171,5021.2H10796Z"
                                  transform="translate(-8876.171 -4933.648)" fill="#fff"/>
                        </svg>
                        <Image src={"/img/svg/infographieHome.svg"} alt={''} width={200} height={347}></Image>
                    </div>
                    <div className="keys__grid">
                        {data.chiffres.map((chiffre,index) => <Chiffre key={index} chiffre={chiffre} />)}
                    </div>
                </div>
            </section>
            <section className="description">
                <div className="container">
                    <h2>
                        Focus sur <br/>
                        <strong>Accompagner les territoires</strong>
                    </h2>
                    <div className={"description__content"} dangerouslySetInnerHTML={{__html: data.focus.contenu}}>

                    </div>
                </div>
            </section>
        </main>
    );
}
