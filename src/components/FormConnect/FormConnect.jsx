"use client";

import {useEffect, useState} from "react";
import {redirect} from "next/navigation";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";

// Dérogation développement : en local, si la clé reCAPTCHA n'est pas configurée,
// on saute la vérification pour pouvoir tester la connexion.
// Inactif en production (NODE_ENV === 'production'), donc aucun risque côté prod.
const RECAPTCHA_BYPASS =
    process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export const FormConnect = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loading, setLoading] = useState(false);

    const {executeRecaptcha} = useGoogleReCaptcha();

    useEffect(() => {
        if (isLoaded && token) redirect('/espace-administrateur');
        setToken(window.localStorage.getItem('token'));
        setIsLoaded(true);
    }, [isLoaded]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!RECAPTCHA_BYPASS && !executeRecaptcha) {
            setError('Le service de vérification est indisponible. Veuillez réessayer.');
            return;
        }

        setLoading(true);

        try {
            if (RECAPTCHA_BYPASS) {
                console.warn('[DEV] reCAPTCHA non configuré : vérification ignorée.');
            } else {
                const gRecaptchaToken = await executeRecaptcha('login');

                const recaptchaResponse = await fetch('/api/recaptchaSubmit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json, text/plain, */*'
                    },
                    body: JSON.stringify({gRecaptchaToken: gRecaptchaToken})
                });

                const recaptchaJson = await recaptchaResponse.json();

                if (recaptchaJson.success !== true) {
                    setToken(null);
                    setError('Le captcha n\'a pas été validé. Veuillez réessayer.');
                    return;
                }
            }

            // Send a POST request to the custom authentication endpoint
            const response = await fetch(`https://${process.env.NEXT_PUBLIC_BACK_DNS}/wp-json/montlucon/v1/connect`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });

            const data = await response.json();

            if (!response.ok || !data.token) {
                setToken(null);
                setError('Le couple email/mot de passe est incorrect. Veuillez réessayer.');
                return;
            }

            window.localStorage.setItem('token', data.token);
            setToken(data.token);
            window.location.reload();
        } catch (error) {
            setToken(null);
            setError('Une erreur est survenue lors de la connexion. Veuillez réessayer.');
        } finally {
            setLoading(false);
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
                    <button type="submit" className={'btn btn--xs'} disabled={loading}>
                        {loading ? 'Connexion…' : 'Se connecter'}
                    </button>
                </form>
                {error && (
                    <p className="formConnect__error" role="alert"
                       style={{color: 'red', fontWeight: 'bold', marginTop: '1rem'}}>
                        {error}
                    </p>
                )}
            </div>
        </>
    )
}
