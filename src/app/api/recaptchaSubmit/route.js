import {NextResponse} from "next/server";

export async function POST(request) {
    const {gRecaptchaToken} = await request.json();

    const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${gRecaptchaToken}`,
        {method: 'POST'}
    );

    const data = await response.json();

    if (data.success && data.score >= 0.5) {
        return NextResponse.json({success: true, score: data.score});
    }

    return NextResponse.json({success: false, score: data.score ?? 0});
}
