"use client";

import { useState } from "react";
import useSWR from "swr";
import "./FileBirdBrowser.scss";

const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error("fetch error");
    return res.json();
};

function formatBytes(bytes) {
    if (!bytes || Number.isNaN(bytes)) return "";
    const units = ["o", "Ko", "Mo", "Go"];
    let value = Number(bytes);
    let i = 0;
    while (value >= 1024 && i < units.length - 1) {
        value /= 1024;
        i++;
    }
    return `${value.toFixed(value < 10 && i > 0 ? 1 : 0)} ${units[i]}`;
}

function fileExtension(file) {
    const fromUrl = file.url?.split(".").pop();
    return (fromUrl && fromUrl.length <= 5 ? fromUrl : file.mime?.split("/").pop() || "fichier").toUpperCase();
}

const FolderIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
              fill="#DCF3F8" stroke="#04ADD1" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
);

const DocIcon = () => (
    <svg width="34" height="34" viewBox="0 0 20.101 25.449" fill="none" aria-hidden="true">
        <g transform="translate(-259.629 -672.64)">
            <path d="M6.1,24.949H17.934A1.672,1.672,0,0,0,19.6,23.282V2.167A1.672,1.672,0,0,0,17.934.5H2.167A1.672,1.672,0,0,0,.5,2.167V19.346Z"
                  transform="translate(259.629 672.64)" fill="none" stroke="#ac3053" strokeMiterlimit="10" strokeWidth="1"/>
            <path d="M1.5,74.5H6.848v5.6" transform="translate(258.884 617.486)" fill="none" stroke="#ac3053"
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
            <line x2="10.951" transform="translate(264.204 678.488)" stroke="#ac3053" strokeLinecap="round" strokeWidth="1"/>
            <line x2="10.951" transform="translate(264.204 682.563)" stroke="#ac3053" strokeLinecap="round" strokeWidth="1"/>
            <line x2="5.348" transform="translate(264.204 686.638)" stroke="#ac3053" strokeLinecap="round" strokeWidth="1"/>
        </g>
    </svg>
);

const BackIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
              fill="#fff" stroke="#AC3053" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M14 9l-3 3 3 3M11 12h4" stroke="#AC3053" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const DownloadIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const CircleNotch = () => (
    <svg className="filebird__spinner" width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="3" strokeLinecap="round"
                strokeDasharray="42 15"/>
    </svg>
);

export default function FileBirdBrowser() {
    const [folder, setFolder] = useState(null); // null = dossier racine
    const key = folder === null ? "/api/filebird/browse" : `/api/filebird/browse?folder=${folder}`;
    // keepPreviousData : on garde l'affichage du dossier précédent pendant le
    // chargement du suivant → pas de layout shift, l'overlay se pose par-dessus.
    const { data, error, isValidating } = useSWR(key, fetcher, {
        revalidateOnFocus: false,
        keepPreviousData: true,
    });

    // Le parent se déduit du fil d'Ariane (avant-dernier élément). Null = on est à la racine.
    const breadcrumb = data?.breadcrumb ?? [];
    const parent = breadcrumb.length > 1 ? breadcrumb[breadcrumb.length - 2] : null;

    return (
        <section className="filebird">
            <h2 className="filebird__title">Ressources</h2>

            <div className="filebird__body">
                {isValidating && (
                    <div className="filebird__overlay" aria-live="polite" aria-busy="true">
                        <CircleNotch />
                    </div>
                )}

                {error && <p className="filebird__state filebird__state--error">Impossible de charger les ressources.</p>}

                {data && !error && (
                    <>
                    {(parent || data.folders.length > 0) && (
                        <ul className="filebird__grid filebird__grid--folders">
                            {parent && (
                                <li>
                                    <button
                                        type="button"
                                        className="filebird__folder filebird__folder--back"
                                        onClick={() => setFolder(parent.id)}
                                    >
                                        <BackIcon />
                                        <span className="filebird__folder-name">Retour</span>
                                        <span className="filebird__count">{parent.name}</span>
                                    </button>
                                </li>
                            )}
                            {data.folders.map((f) => (
                                <li key={f.id}>
                                    <button type="button" className="filebird__folder" onClick={() => setFolder(f.id)}>
                                        <FolderIcon />
                                        <span className="filebird__folder-name">{f.name}</span>
                                        <span className="filebird__count">{f.count} élément{f.count > 1 ? "s" : ""}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}

                    {data.files.length > 0 && (
                        <ul className="filebird__grid filebird__grid--files">
                            {data.files.map((file) => (
                                <li key={file.id} className="filebird__file">
                                    <a
                                        className="filebird__preview"
                                        href={file.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={`Ouvrir ${file.title}`}
                                    >
                                        {file.thumbnail ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img src={file.thumbnail} alt={file.title} loading="lazy" />
                                        ) : (
                                            <span className="filebird__doc">
                                                <DocIcon />
                                                <span className="filebird__ext">{fileExtension(file)}</span>
                                            </span>
                                        )}
                                    </a>
                                    <div className="filebird__meta">
                                        <span className="filebird__file-name" title={file.title}>{file.title}</span>
                                        {file.filesize && <span className="filebird__size">{formatBytes(file.filesize)}</span>}
                                    </div>
                                    <a
                                        className="btn btn--xs filebird__download"
                                        href={`/api/filebird/download?id=${file.id}`}
                                    >
                                        <DownloadIcon />
                                        <span>Télécharger</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}

                    {data.folders.length === 0 && data.files.length === 0 && (
                        <p className="filebird__state">Ce dossier est vide.</p>
                    )}
                    </>
                )}
            </div>
        </section>
    );
}
