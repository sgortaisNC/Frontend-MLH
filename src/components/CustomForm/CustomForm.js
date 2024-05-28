"use client";

import {useEffect, useState} from "react";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";


export const CustomForm = ({formId, children}) => {
    const [submit, setSubmit] = useState(false);
    const {executeRecaptcha} = useGoogleReCaptcha();

    const [hasRecaptcha, setHasRecaptcha] = useState(false);

    useEffect(() => {
        setTimeout(() => {

            console.log('lauching recaptcha');
            if (!hasRecaptcha && document.querySelectorAll(".grecaptcha-badge").length > 0) {
                setHasRecaptcha(true);
                console.log('trouvé');
            }
        },1000)
    }, [hasRecaptcha]);

    async function handleSubmit(e) {
        e.preventDefault();

        if (!executeRecaptcha) {
            return;
        }

        const gRecaptchaToken = await executeRecaptcha('forminatorForm');

        const response = await fetch('/api/recaptchaSubmit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*'
            },
            body: JSON.stringify({gRecaptchaToken: gRecaptchaToken})
        });

        let responseJson = await response.json();
        if (responseJson.success === true) {
            const form = e.target;
            const data = new FormData(form);
            const r = await fetch('https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/submit-form', {
                method: 'POST',
                body: data
            });
            const entryID = await r.json();
            if (parseInt(entryID) > 0) {
                form.reset();
            }
            setSubmit(true)

        } else {

        }


    }

    return (
        <>
            {submit && <div className="alerte">
                <button title={"Fermer"} onClick={() => {
                    setSubmit(false)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 384 512" width={20}>
                        <path fill={'currentColor'}
                              d="M338.1 413.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L203.3 256 349.4 109.9c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L192 244.7 45.9 98.6c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L180.7 256 34.6 402.1c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L192 267.3 338.1 413.4z"/>
                    </svg>
                </button>
                <div className="alerte__inner">
                    <div className="text-center">
                        <div className="alerte__title">{"Merci"}</div>
                    </div>
                    <strong className="alerte__content">
                        <p className={'text-center'}>
                            Nous avons bien reçu votre formulaire complété. <br/> Nous vous recontacterons dans les plus
                            brefs délais.
                        </p>
                    </strong>
                </div>
            </div>}

            {!hasRecaptcha &&
                <h2>Le cookie Google reCaptcha n&apos;est pas actif, le formulaire ne pourra pas s&apos;envoyer</h2>}
            <form className={`innerForm form-${formId}`} onSubmit={handleSubmit}>
                {children}
            </form>
        </>
    );
};
