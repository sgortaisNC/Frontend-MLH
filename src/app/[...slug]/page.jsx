"use client";

import PostNotFound from "@/app/not-found"
import useSWR from "swr";
import Image from "next/image";
import './page.scss';
import ForminatorField from "@/components/ForminatorField/ForminatorField";
import Titre from "@/components/Titre/Titre";


const fetcher = url => fetch(url).then(r => r.json())

export default function Page({params}) {

    const lastSlug = params.slug[params.slug.length - 1]

    const {data, error} = useSWR(`https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/page/${lastSlug}`, fetcher)
    if (error) return <PostNotFound/>
    if (!data) return <></>
    if  (data.length === 0) return <PostNotFound/>

    const {titre, chapo, image, contenu, formulaire, formID} = data[0];

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        fetch('https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/submit-form', {
            method: 'POST',
            body: data
        }).then(r => r.json()).then(r => {
            console.log(r);
        });

        return false;
    }

    return <div>
        <Titre titre={titre} chapo={chapo}/>
        <Image src={image} alt={titre} height={100} width={100}/>
        <div className="wysiwyg" dangerouslySetInnerHTML={{__html: contenu}}></div>

        {formulaire && formID ?
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="form_id" value={formID}/>
                {formulaire.map((wrapper) => <ForminatorField key={wrapper.wrapper_id} wrapper={wrapper}/>)}
                <button type={'submit'} className={'btn'}>Envoyer</button>
            </form>
            : null
        }

    </div>
}
