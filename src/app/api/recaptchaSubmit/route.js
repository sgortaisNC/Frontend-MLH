import {NextResponse} from "next/server";

export async function POST(request, response) {
    const secretKey = "6LfGlaYpAAAAANZgolnO1ix3OfJfAGMkbKBIe9mU";

    const postData = await request.json();
    const {gRecaptchaToken} = postData;

    let res;
    let resJson;

    const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;
    try {
        res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        });

        resJson = await res.json();
    } catch (e) {
        return NextResponse.json({success: false});
    }

    if (res && resJson.success && resJson.score > 0.5) {
        return NextResponse.json({
            success: true,
            score: resJson.score
        });
    }else{
        return NextResponse.json({success: false});
    }
}
