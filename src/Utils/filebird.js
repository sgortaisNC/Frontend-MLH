// Helpers serveur pour l'API publique FileBird + médias WordPress.
// ⚠️ Ce module ne doit JAMAIS être importé depuis un composant client :
//    il lit FILEBIRD_API_KEY (clé secrète) depuis l'environnement.

const BACK_DNS = process.env.NEXT_PUBLIC_BACK_DNS;
const API_KEY = process.env.FILEBIRD_API_KEY;

export const ROOT_FOLDER_ID = parseInt(process.env.FILEBIRD_ROOT_FOLDER ?? "14", 10);

const FILEBIRD_BASE = `https://${BACK_DNS}/wp-json/filebird/public/v1`;
const MEDIA_BASE = `https://${BACK_DNS}/wp-json/wp/v2/media`;

function authHeaders() {
    return { Authorization: `Bearer ${API_KEY}` };
}

// Récupère l'arborescence complète des dossiers FileBird (liste de noeuds imbriqués).
export async function getFolderTree() {
    const res = await fetch(`${FILEBIRD_BASE}/folders`, {
        headers: authHeaders(),
        cache: "no-store",
    });
    if (!res.ok) throw new Error(`FileBird folders: ${res.status}`);
    const json = await res.json();
    return json?.data?.folders ?? [];
}

// Recherche récursive d'un noeud par id dans un ensemble de noeuds.
export function findNode(nodes, id) {
    for (const node of nodes) {
        if (Number(node.id) === Number(id)) return node;
        const found = findNode(node.children ?? [], id);
        if (found) return found;
    }
    return null;
}

// Nombre total de fichiers d'un dossier, sous-dossiers compris (récursif).
// L'API FileBird ne fournit que le compte direct via `data-count`.
export function getRecursiveCount(node) {
    const own = Number(node["data-count"] ?? 0);
    return (node.children ?? []).reduce((sum, child) => sum + getRecursiveCount(child), own);
}

// Chemin (fil d'Ariane) depuis `root` jusqu'au dossier `targetId` inclus.
export function getBreadcrumb(root, targetId) {
    const path = [];
    function walk(node) {
        path.push({ id: Number(node.id), name: node.title });
        if (Number(node.id) === Number(targetId)) return true;
        for (const child of node.children ?? []) {
            if (walk(child)) return true;
        }
        path.pop();
        return false;
    }
    return walk(root) ? path : [{ id: Number(root.id), name: root.title }];
}

// Identifiants des médias contenus directement dans un dossier.
export async function getAttachmentIds(folderId) {
    const res = await fetch(`${FILEBIRD_BASE}/attachment-id?folder_id=${folderId}`, {
        headers: authHeaders(),
        cache: "no-store",
    });
    if (!res.ok) throw new Error(`FileBird attachment-id: ${res.status}`);
    const json = await res.json();
    return json?.data?.attachment_ids ?? [];
}

const MEDIA_FIELDS = [
    "id",
    "source_url",
    "mime_type",
    "media_type",
    "title",
    "date",
    "media_details.filesize",
    "media_details.sizes.thumbnail.source_url",
    "media_details.sizes.medium.source_url",
].join(",");

function normalizeMedia(item) {
    const details = item.media_details ?? {};
    const sizes = details.sizes ?? {};
    const isImage = item.media_type === "image";
    return {
        id: item.id,
        title: item.title?.rendered || "Sans titre",
        url: item.source_url,
        mime: item.mime_type,
        type: item.media_type,
        thumbnail:
            sizes.thumbnail?.source_url ||
            sizes.medium?.source_url ||
            (isImage ? item.source_url : null),
        filesize: details.filesize ?? null,
        date: item.date ?? null,
    };
}

// Résout une liste d'identifiants de médias en métadonnées normalisées.
export async function getMedia(ids) {
    if (!ids || ids.length === 0) return [];
    const url = `${MEDIA_BASE}?include=${ids.join(",")}&per_page=100&_fields=${MEDIA_FIELDS}`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`WP media: ${res.status}`);
    const items = await res.json();
    return items
        .map(normalizeMedia)
        .sort((a, b) => a.title.localeCompare(b.title, "fr", { sensitivity: "base" }));
}

// Résout un seul média (utilisé par la route de téléchargement).
export async function getMediaById(id) {
    const [media] = await getMedia([id]);
    return media ?? null;
}
