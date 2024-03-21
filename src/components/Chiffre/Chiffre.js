import Image from "next/image";
export default function Chiffre({chiffre}) {
    return <div className="key">
        <Image src={chiffre.pictogramme} alt='' height={75} width={75} style={{height:"auto",objectFit: 'contain'}} />
        <b>{chiffre.chiffre}</b>
        <span>{chiffre.texte}</span>
    </div>
}
