import type { NextApiRequest, NextApiResponse } from "next";
import { extractURLs } from "src/utils/urls";

const text1 = `
www.englishdictionary.com
www.englishpod101.com
www.english-dictionary.net
www.english-dictionary.com

www.englishdictionary.com
`;

const text2 = `
https://www.spanishbooks.net
https://www.spanishbooks.net/guide_english
https://www.spanishbooks.net/guide_english.php

https://www.spanishbooks.net/guides/guide_english
https://www.spanishbooks.net/guides/guide_english.php
`;

export default async (request: NextApiRequest, response: NextApiResponse) => {
    text2.split("\n").forEach(line => {
        console.log(extractURLs(line));
    });
    return response.status(200).json({});
}