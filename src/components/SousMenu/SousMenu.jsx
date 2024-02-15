import Link from "next/link";
export default function SousMenu(props) {
    const links = props.links;

    return (
        <>
            {links.map((link, index) => {
                return (
                    <li key={index}>
                        <Link href={link.url}>{link.title}</Link>
                        {link.niveau3 && link.niveau3.length > 0 && <ul><SousMenu links={link.niveau3}/> </ul>}
                    </li>
                )
            })}
        </>
    );
}
