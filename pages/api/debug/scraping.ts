import type { NextApiRequest, NextApiResponse } from "next";
import { scrapPage } from "src/services/scraping";

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const url = "https://www.wikidex.net/"
    console.log(await scrapPage(url));
    return response.status(200).json({});
}