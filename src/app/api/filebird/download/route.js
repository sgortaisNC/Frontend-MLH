import { NextResponse } from "next/server";
import { getMediaById } from "@/Utils/filebird";

export const dynamic = "force-dynamic";

// Renvoie le fichier en forçant le téléchargement (Content-Disposition: attachment).
// Indispensable car le média est servi depuis un autre domaine (l'attribut HTML
// `download` est ignoré pour les liens cross-origin).
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id"), 10);

    if (Number.isNaN(id)) {
        return NextResponse.json({ error: "Identifiant de fichier invalide." }, { status: 400 });
    }

    try {
        const media = await getMediaById(id);
        if (!media?.url) {
            return NextResponse.json({ error: "Fichier introuvable." }, { status: 404 });
        }

        const upstream = await fetch(media.url, { cache: "no-store" });
        if (!upstream.ok || !upstream.body) {
            return NextResponse.json({ error: "Fichier indisponible." }, { status: 502 });
        }

        // Nom de fichier : on conserve l'extension d'origine de l'URL.
        const filename = decodeURIComponent(media.url.split("/").pop() || `fichier-${id}`);
        const headers = new Headers();
        headers.set("Content-Type", upstream.headers.get("content-type") || media.mime || "application/octet-stream");
        const contentLength = upstream.headers.get("content-length");
        if (contentLength) headers.set("Content-Length", contentLength);
        headers.set(
            "Content-Disposition",
            `attachment; filename="${filename.replace(/"/g, "")}"; filename*=UTF-8''${encodeURIComponent(filename)}`
        );

        return new NextResponse(upstream.body, { status: 200, headers });
    } catch (err) {
        return NextResponse.json({ error: "Échec du téléchargement." }, { status: 502 });
    }
}
