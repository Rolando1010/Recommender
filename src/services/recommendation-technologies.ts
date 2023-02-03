import { extractListFromText } from "src/utils/text";
import { extractURLs } from "src/utils/urls";
import { askAI, Model } from "./ai"
import { getWebsiteData } from "./websites";

const getRecommendationTechnologies = async (
    search: string,
    onRecommendation: (recommendation: string) => void
) => {
    const text = await askAI(
        Model.COMMAND_XLARGE_20221108,
        `what technologies should i use to ${search}?`
    );
    onRecommendation(text);
    return extractListFromText(text);
}

const getTechnologyPageData = async (
    technology: string,
    onRecommendation: (recommendation: string) => void
) => {
    const text = await askAI(
        Model.COMMAND_MEDIUM_NIGHTLY,
        `give the page url of ${technology}`
    );
    onRecommendation(text);
    const [url] = extractURLs(text);
    return await getWebsiteData(url);
}

export {
    getRecommendationTechnologies,
    getTechnologyPageData
}