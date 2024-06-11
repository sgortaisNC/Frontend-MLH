export default async function sitemap() {
    return [];
    const data = await fetch(`https://api.montlucon-habitat.fr/wp-json/montlucon/v1/sitemap`,
        {next: {revalidate: 0}});
    const result = await data.json();

    return result;
}
