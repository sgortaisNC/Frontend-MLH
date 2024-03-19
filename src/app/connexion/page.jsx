"use client";
// pages/login.js

import {useEffect, useState} from 'react';
import {redirect} from 'next/navigation'
import Titre from "@/components/Titre/Titre";

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (isLoaded && token) redirect('/montlucon-habitat/espace-administrateur');
        setToken(window.localStorage.getItem('token'));
        setIsLoaded(true);
    }, [isLoaded]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send a POST request to the custom authentication endpoint
            const response = await fetch('https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/connect', {
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
    };

    return (
        <div>
            <Titre titre={'Connectez-vous à l\'espace administrateur'}></Titre>
            <div className="container">
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
            </div>
        </div>
    );
};
export default LoginPage;
