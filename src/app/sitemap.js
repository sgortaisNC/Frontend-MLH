export default async function sitemap() {

    const data = await fetch('https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/sitemap',
        {next: {revalidate: 0}});
    const result = await data.json();

    return result;
}
