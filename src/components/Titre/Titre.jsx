import './Titre.scss'

export default function Titre({titre, chapo}) {
    return <section className={'titre'}>
        <div className="container">
            <h1>{titre}</h1>
            {chapo && <div className="chapo" dangerouslySetInnerHTML={{__html: chapo}}></div>}
        </div>
    </section>
}
