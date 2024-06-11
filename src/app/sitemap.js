import { BASE_URL } from '@/Utils/constants'
export default async function sitemap() {
    const data = await fetch(`${BASE_URL}/wp-json/montlucon/v1/sitemap`,
        {next: {revalidate: 0}});
    const result = await data.json();

    return result;
}
