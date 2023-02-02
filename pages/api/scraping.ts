import { NextApiRequest, NextApiResponse } from "next";
import { scrapPage } from "src/services/scraping";
import { queryStringToString } from "src/utils/text";

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const { url } = request.query;
    const pageData = await scrapPage(queryStringToString(url));
    return response.status(200).json(pageData);
}