import Titre from "@/components/Titre/Titre";
import Link from "next/link";

export default function PostNotFound() {
    return <>
        <Titre titre={"Page non trouvée"}/>
        <div className="container" style={{marginBottom: '50px'}}>
            <h2>La page n’a pas pu être trouvée ou n’existe plus</h2><br/>
            <Link href={"/"} className={"btn btn--xs"}>Retour à l’accueil</Link>
        </div>
    </>
}
