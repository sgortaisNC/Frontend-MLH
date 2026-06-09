import Titre from "@/components/Titre/Titre";
import ConnexionClient from "@/app/connexion/ConnexionClient";

export const metadata = {
    title: 'Connexion',
    description: 'Connectez-vous à l\'espace administrateur de Montluçon Habitat.',
    keywords: 'connexion, espace, administrateur, montlucon, habitat'
}

const LoginPage = () => {
    return (
        <div>
            <Titre titre={'Connectez-vous à l\'espace administrateur'}></Titre>
            <div className="container">
                <ConnexionClient/>
            </div>
        </div>
    );
};
export default LoginPage;
