import Image from "next/image";
export default function Chiffre({chiffre}) {
    return <div className="key">
        <Image src={chiffre.pictogramme} alt='' height={88} width={88}/>
        <b>{chiffre.chiffre}</b>
        <span>{chiffre.texte}</span>
    </div>
}
