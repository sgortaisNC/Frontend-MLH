"use client";
import useSWR from "swr";
import PostNotFound from "@/app/not-found";
import TeaserActu from "@/components/Teaseractu/TeaserActu";
import {useState} from "react";
import Titre from "@/components/Titre/Titre";

const fetcher = url => fetch(url).then(r => r.json())

export default function Page() {
    const [page, setPage] = useState(0)

    const {data, error} = useSWR("https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/actualites", fetcher)
    if (error) return <PostNotFound/>
    if (!data) return <></>


    const nbPerPage = 3;
    const pageMax = Math.ceil(data.posts.length / nbPerPage);
    const minNumber = Math.max(0, page - 2);
    const maxNumber = Math.min(pageMax, page + 3);

    const posts = data.posts.slice(page * nbPerPage, page * nbPerPage + nbPerPage);


    return <main>
        <Titre titre={'Nos actualités'}/>

        {posts.map(post => <TeaserActu key={post.id} actu={post}/>)}

        {data.posts.length > nbPerPage && <div>

            {page > 0 ? <button className={'btn'} onClick={() => setPage(page - 1)}>Précédent</button> : null}

            {Array.from({length: pageMax}, (_, i) => i)
                .slice(minNumber, maxNumber)
                .map(
                    (i) => <>
                        <button key={i}
                                className={'btn ' + (i === page ? 'btn--outline' : '')}
                                onClick={() => setPage(i)}>{i + 1}</button>
                    </>
                )}
            {page < pageMax - 1 ? <button className={'btn'}
                                          onClick={() => setPage(page + 1)}>Suivant</button> : null}

        </div>}
    </main>;
}
