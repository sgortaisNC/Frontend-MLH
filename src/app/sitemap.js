export default async function sitemap() {

    const data = await fetch('https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/sitemap');
    const result = await data.json();

    return result;
    fetch('https://api-montlucon.netcomdev2.com/wp-json/montlucon/v1/sitemap')
        .then(res => res.json())
        .then(
            (result) => {
                return result
            }
        )
           .catch((error) => {
                console.error(error);
            });
}
