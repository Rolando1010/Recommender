import { extractURLs } from "src/utils/urls";
import { askAI, Model } from "./ai"
import { scrapPage } from "./scraping";

const getRecommendationTechnologies = async (search: string) => {
    const text = await askAI(
        Model.COMMAND_XLARGE_20221108,
        `what technologies should i use to ${search}?`
    );
    return text.split("\n").reduce((acc: string[], el) => {
        if(el[0] === "-" && !acc.includes(el)){
            return [...acc, el.slice(1)];
        }
        return acc;
    }, []);
}

const getTechnologyPageData = async (technology: string) => {
    const text = await askAI(
        Model.COMMAND_MEDIUM_NIGHTLY,
        `give the page url of ${technology}`
    );
    const [url] = extractURLs(text);
    return await scrapPage(url);
}

export {
    getRecommendationTechnologies,
    getTechnologyPageData
}