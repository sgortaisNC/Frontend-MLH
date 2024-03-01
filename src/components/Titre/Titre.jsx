import './Titre.scss'
import Share from "@/components/Share/Share";
import Ariane from "@/components/Ariane/Ariane";


export default function Titre({titre, chapo, ariane = []}){

    return <>
        <section className={'titre'}>
            <div className="container">
                <h1 dangerouslySetInnerHTML={{__html: titre}}></h1>
                {chapo && <div className="chapo" dangerouslySetInnerHTML={{__html: chapo}}></div>}
                <Share/>
            </div>
        </section>
        <Ariane ariane={ariane}/>
    </>

}
