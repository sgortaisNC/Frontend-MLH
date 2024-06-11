"use client";
import Sidebar from "@/components/Sidebar/Sidebar";
import Image from "next/image";
import ForminatorField from "@/components/ForminatorField/ForminatorField";
import {useEffect, useState} from "react";
import {redirect} from "next/navigation";

export const InnerPrivate = ({data}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [token, setToken] = useState(null);


    useEffect(() => {
        if (isLoaded && !token) redirect('/connexion');
        setToken(window.localStorage.getItem('token'));
        setIsLoaded(true);
    }, [isLoaded]);

    const {titre, image, contenu, formulaire, formID, documents, liens} = data[0];

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        fetch(`https://${process.env.BACK_DNS}/wp-json/montlucon/v1/submit-form`, {
            method: 'POST',
            body: data
        }).then(r => r.json()).then(r => {
        });

        return false;
    }

    return <>
        <div
            className={(documents && documents.length > 0) || (liens && liens.length > 0) ? "container container--inner" : "container"}>
            {(documents && documents.length > 0) || (liens && liens.length > 0) ?
                <Sidebar documents={documents} liens={liens}/> : null
            }
            <div className="content">
                {image &&
                    <div className="text-center">
                        <Image src={image} alt={titre} height={503} width={1161}/>
                    </div>
                }
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
        </div>
    </>
}
