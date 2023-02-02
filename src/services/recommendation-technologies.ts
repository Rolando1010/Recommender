import { extractListFromText } from "src/utils/text";
import { extractURLs } from "src/utils/urls";
import { askAI, Model } from "./ai"
import { getWebsiteData } from "./websites";

const getRecommendationTechnologies = async (search: string) => {
    const text = await askAI(
        Model.COMMAND_XLARGE_20221108,
        `what technologies should i use to ${search}?`
    );
    return extractListFromText(text);
}

const getTechnologyPageData = async (technology: string) => {
    const text = await askAI(
        Model.COMMAND_MEDIUM_NIGHTLY,
        `give the page url of ${technology}`
    );
    const [url] = extractURLs(text);
    return await getWebsiteData(url);
}

export {
    getRecommendationTechnologies,
    getTechnologyPageData
}