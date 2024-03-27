"use client";

import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import React from "react";

export const GoogleCaptchaWrapper = ({children}) => {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={"6LfGlaYpAAAAAMhRF9yaQ3jwZb8BK2k0GfUJqpUq"}>
            {children}
        </GoogleReCaptchaProvider>
    );
}
