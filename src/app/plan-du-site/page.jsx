import Titre from "@/components/Titre/Titre";

export const metadata = {
    title: "Plan du site",
    description: "Retrouvez sur cette page le plan du site de Montluçon Habitat"
}
async function getData() {
    const res = await fetch('https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/options/header');
    if (!res.ok) {
        return false;
    }

    return await res.json();
}

export default async function Page() {
    const data = await getData();
    return (
        <div>
            <Titre titre={"Plan du site"} ariane={[{label: "Plan du site", url:""}]}/>
            <div className="container">
                <div className="wysiwyg">
                    <h2>Menu principal</h2>
                    <ul className={"sitemap"}>
                        {data.menu.map((item, index) => (
                            <li key={index}>
                                <a href={item.url}>{item.title}</a>
                                {item.niveau2 && (
                                    <ul>
                                        {item.niveau2.map((child, indexB) => (
                                            <li key={indexB}>
                                                <a href={child.url}>{child.title}</a>
                                                {child.niveau3 && (
                                                    <ul>
                                                        {child.niveau3.map((childB, indexC) => (
                                                            <li key={indexC}>
                                                                <a href={childB.url}>{childB.title}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
