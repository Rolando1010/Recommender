import type { RecommendationTechnology } from "src/utils/types";
import { extractURLs } from "src/utils/urls";
import { askAI, Model } from "./ai"
import { getWebsiteData } from "./websites";

const getRecommendationTechnologies = async (search: string) => {
    const text = await askAI(
        Model.COMMAND_XLARGE_20221108,
        `what technologies should i use to ${search}?`
    );
//     Some common technologies that can be used to create a MIDI device include:
// -The Java Sound API
// -The Open Sound Control (OSC) protocol
// -The Audio API
// -The MIDI API
// Each of these technologies has its own advantages and disadvantages, and the best choice will depend on the specific requirements of your project. For example, the Java Sound API is a good choice if you want to create a device that can be run on multiple platforms, but it
    

// There are many technologies that you can use to make a recommendation engine. Some common technologies that are used for recommendation engines include:
// Machine learning algorithms: Machine learning algorithms can be used to analyze data and make predictions about user preferences. This can be used to make recommendations for products or services that users may be interested in.
// Artificial intelligence: AI can be used to analyze data and make decisions in a way that mimics human behavior. This can be used to make recommendations based on
    console.log(text);
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