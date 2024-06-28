import Titre from "@/components/Titre/Titre";
import './listeBiens.scss';
import {ListeBiens} from "@/components/ListeBiens/ListeBiens";

export const metadata= {
    title: 'Logements à louer',
    description: 'Découvrez nos biens à louer de Montluçon et ses environs.',
    keywords: 'biens, louer, agence, immobilière'
}

export const revalidate = 0;
export const dynamic = 'force-dynamic'

export default function Page() {
    return <div>
        <Titre titre={'Logements à louer'} ariane={[{label: 'Logements à louer', url: ''}]}/>
        <div className="container">
            <ListeBiens/>
        </div>
    </div>
}
