import Titre from "@/components/Titre/Titre";
import './listeBiens.scss';
import {ListeBiens} from "@/components/ListeBiens/ListeBiens";


export const metadata= {
    title: 'Biens à louer',
    description: 'Découvrez nos biens à louer de Montluçon et ses environs.',
    keywords: 'biens, louer, agence, immobilière'
}

export default function Page() {
    return <div>
        <Titre titre={'Biens à louer'} ariane={[{label: 'Biens à louer', url: ''}]}/>
        <div className="container">
            <ListeBiens/>
        </div>
    </div>
}
