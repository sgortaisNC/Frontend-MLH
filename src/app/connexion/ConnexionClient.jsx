"use client";

import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import {FormConnect} from "@/components/FormConnect/FormConnect";

export default function ConnexionClient() {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
            <FormConnect/>
        </GoogleReCaptchaProvider>
    );
}
