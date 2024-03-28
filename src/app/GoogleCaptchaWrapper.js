"use client";

import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import React from "react";

export const GoogleCaptchaWrapper = ({siteKey,children}) => {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
            {children}
        </GoogleReCaptchaProvider>
    );
}
