import Titre from "@/components/Titre/Titre";
import {FormConnect} from "@/components/FormConnect/FormConnect";


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
                <FormConnect/>
            </div>
        </div>
    );
};
export default LoginPage;
