import Titre from "@/components/Titre/Titre";

export default function Page(){

    const title = "Liste des offres d'emploi"

    return (
        <>
            <Titre titre={title} />
            <div>[FILTRES]</div>
            <div>[CANDIDATURE SPONTANÉE]</div>
            <div>[LISTE]</div>
            <div>[PAGINATION]</div>
        </>
    )
}
