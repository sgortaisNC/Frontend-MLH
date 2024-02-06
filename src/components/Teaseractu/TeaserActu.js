import Image from 'next/image'
export default function TeaserActu({title}) {
    return (
        <a href="">
            <article className="actuTeaser">
                <figure>
                    <Image src="/img/dummies/actu1.webp" width={469} height={362} alt=""/>
                    <figcaption>
                        <time dateTime="2024-11-21"><b>21</b> Nov</time>
                        <h3>{title}</h3>
                    </figcaption>
                </figure>
            </article>
        </a>
    )
}
