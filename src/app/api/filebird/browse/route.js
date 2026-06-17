import { NextResponse } from "next/server";
import {
    ROOT_FOLDER_ID,
    getFolderTree,
    findNode,
    getBreadcrumb,
    getAttachmentIds,
    getMedia,
} from "@/Utils/filebird";

export const dynamic = "force-dynamic";

// Liste les sous-dossiers et fichiers d'un dossier FileBird.
// La navigation est restreinte au sous-arbre du dossier racine (espace administrateur).
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const requested = searchParams.get("folder");
    const folderId = requested === null ? ROOT_FOLDER_ID : parseInt(requested, 10);

    if (Number.isNaN(folderId)) {
        return NextResponse.json({ error: "Identifiant de dossier invalide." }, { status: 400 });
    }

    try {
        const tree = await getFolderTree();
        const root = findNode(tree, ROOT_FOLDER_ID);
        if (!root) {
            return NextResponse.json({ error: "Dossier racine introuvable." }, { status: 404 });
        }

        // On ne cherche le dossier demandé qu'à l'intérieur du sous-arbre racine.
        const node = findNode([root], folderId);
        if (!node) {
            return NextResponse.json(
                { error: "Dossier inaccessible." },
                { status: 403 }
            );
        }

        const folders = (node.children ?? [])
            .map((child) => ({
                id: Number(child.id),
                name: child.title,
                count: Number(child["data-count"] ?? 0),
            }))
            .sort((a, b) => a.name.localeCompare(b.name, "fr", { sensitivity: "base" }));

        const ids = await getAttachmentIds(folderId);
        const files = await getMedia(ids);

        return NextResponse.json({
            folder: { id: Number(node.id), name: node.title },
            breadcrumb: getBreadcrumb(root, folderId),
            folders,
            files,
        });
    } catch (err) {
        return NextResponse.json(
            { error: "Impossible de récupérer les ressources." },
            { status: 502 }
        );
    }
}
