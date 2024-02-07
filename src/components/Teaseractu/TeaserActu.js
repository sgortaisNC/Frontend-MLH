import Image from 'next/image'
import Link from "next/link";
export default function TeaserActu({actu}) {

    const {titre, image, jour, mois, date, lien} = actu;

    return (
        <Link href={lien}>
            <article className="actuTeaser">
                <figure>
                    <Image src={image} width={469} height={362} alt={titre}/>
                    <figcaption>
                        <time dateTime={date}><b>{jour}</b>{mois}</time>
                        <h3>{titre}</h3>
                    </figcaption>
                </figure>
            </article>
        </Link>
    )
}
