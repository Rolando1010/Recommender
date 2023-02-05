import type { NextApiRequest, NextApiResponse } from "next";
import { scrapPage } from "src/services/scraping";

const urls = [
    // "https://www.wikidex.net/",
    "https://www.spanishbooks.net",
    "https://www.spanishbooks.net/guide_english",
    "https://www.spanishbooks.net/guide_english.php",
    "https://www.spanishbooks.net/guides/guide_english",
    "https://www.spanishbooks.net/guides/guide_english.php"
]

export default async (request: NextApiRequest, response: NextApiResponse) => {
    for(const url of urls){
        console.log(`${url}:`, await scrapPage(url));
    }
    return response.status(200).json({});
}