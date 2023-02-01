import type { NextApiRequest, NextApiResponse } from "next";
import { extractURLs } from "src/utils/urls";

export default async (request: NextApiRequest, response: NextApiResponse) => {
    const text = `
    www.englishdictionary.com
    www.englishpod101.com
    www.english-dictionary.net
    www.english-dictionary.com
    
    www.englishdictionary.com
    `;
    text.split("\n").forEach(line => {
        console.log(extractURLs(line));
    });
    return response.status(200).json({});
}