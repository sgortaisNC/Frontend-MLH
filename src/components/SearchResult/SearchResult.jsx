import './SearchResult.scss'
export default function SearchResult({data}){
    return <>
        <div className="search-result">
            <h3>{data.post_title}</h3>
            <p>{data.post_excerpt}</p>
            <a href="#" className="btn btn--xs">[URL MANQUANTE]</a>
        </div>
    </>
}