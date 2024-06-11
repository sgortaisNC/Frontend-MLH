export default async function sitemap() {
    const data = await fetch(`https://${process.env.BACK_DNS}/wp-json/montlucon/v1/sitemap`,
        {next: {revalidate: 0}});
    const result = await data.json();

    return result;
}
