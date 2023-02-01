import type { RecommendationTechnology } from "src/utils/types";
import { extractURLs } from "src/utils/urls";
import { askAI, Model } from "./ai"
import { getWebsiteData } from "./websites";

const getRecommendationTechnologies = async (search: string) => {
    const text = await askAI(
        Model.COMMAND_XLARGE_20221108,
        `what technologies should i use to ${search}?`
    );
    return text.split("\n").reduce((acc: RecommendationTechnology[], el) => {
        let nameBeginPosition = 0;
        const nameLastPosition = el.indexOf(":");
        
        if(el[0] === "-"){
            nameBeginPosition = el.indexOf("-") + 2;
        }
        else if(el[0] !== " " && Number.isInteger(Number(el[0]))){
            nameBeginPosition = el.indexOf(".") + 2;
        } else return acc;
        const newElement = {
            name: el.slice(nameBeginPosition, nameLastPosition),
            description: el.slice(nameLastPosition + 1)
        };
        if(newElement && !acc.some(rt => rt.name === newElement?.name)){
            return [...acc, newElement];
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
    return await getWebsiteData(url);
}

export {
    getRecommendationTechnologies,
    getTechnologyPageData
}