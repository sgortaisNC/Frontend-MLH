import Image from 'next/image'
export default function TeaserActu({actu}) {

    const {titre, image, date_partielle, date, lien} = actu;

    return (
        <a href={lien}>
            <article className="actuTeaser">
                <figure>
                    <Image src={image} width={469} height={362} alt={titre}/>
                    <figcaption>
                        <time dateTime={date}>{date_partielle}</time>
                        <h3>{titre}</h3>
                    </figcaption>
                </figure>
            </article>
        </a>
    )
}
