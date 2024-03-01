import './SearchResult.scss'
import Link from "next/link";
export default function SearchResult({data}){
    return <>
        <div className="search-result">
            <h3>{data.titre}</h3>
            <p dangerouslySetInnerHTML={{__html: data.resume}}></p>
            <Link href={data.lien} className="btn btn--xs">Lire la suite</Link>
        </div>
    </>
}
