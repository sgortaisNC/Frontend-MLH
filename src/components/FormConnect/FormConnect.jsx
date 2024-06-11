"use client";

import {useEffect, useState} from "react";
import {redirect} from "next/navigation";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";

export const FormConnect = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const {executeRecaptcha} = useGoogleReCaptcha();

    useEffect(() => {
        if (isLoaded && token) redirect('/espace-administrateur');
        setToken(window.localStorage.getItem('token'));
        setIsLoaded(true);
    }, [isLoaded]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!executeRecaptcha) {
            return;
        }

        const gRecaptchaToken = await executeRecaptcha('login');

        const response = await fetch('/api/recaptchaSubmit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*'
            },
            body: JSON.stringify({gRecaptchaToken: gRecaptchaToken})
        });

        let responseJson = await response.json();

        if (responseJson.success === true){
            try {
                // Send a POST request to the custom authentication endpoint
                const response = await fetch(`https://${process.env.NEXT_PUBLIC_BACK_DNS}/wp-json/montlucon/v1/connect`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({email, password}),
                }).then((r) => r.json()).then(r => {
                    if (!r.token) {
                        throw new Error('Failed to authenticate');
                    } else {
                        window.localStorage.setItem('token', r.token);
                        setToken(r.token);
                        window.location.reload();
                    }
                });
                // Redirect or perform further actions upon successful login
                // For demonstration purposes, we're not handling this here
            } catch (error) {
                setToken(null);
                setError('Le couple email/mot de passe est incorrect. Veuillez réessayer.');
            }
        }else{
            setToken(null);
            setError('Le captcha n\'a pas été validé. Veuillez réessayer.');
        }


    };


    return (
        <>
            <div className="formConnect">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label>Mot de passe:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className={'btn btn--xs'}>Se connecter</button>
                </form>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </div>
        </>
    )
}
