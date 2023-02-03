import { askAI, Model } from "./ai";
import { extractURLs, isURL } from "src/utils/urls";
import { getWebsiteData } from "./websites";

const getRecommendationPagesData = async (
	search: string,
	onRecommendation: (recommendation: string) => void
) => {
	const text = await askAI(
		Model.COMMAND_MEDIUM_NIGHTLY,
		`give me pages where i can ${search} and his full urls`
	);
	onRecommendation(text);
	const urls = text.split("\n").map(extractURLs).flat().filter(isURL);
	console.log("URLS:", urls);
	const dataPages = (await Promise.all(urls.map(async url => {
		const data = await getWebsiteData(url);
		if(data) {
			const { html, ...leftData } = data;
			return leftData;
		}
		return data;
	})));
	console.log("DATA_PAGES:", dataPages);
	const cleanDataPages = [];
	for(const dp of dataPages){
		if(dp) cleanDataPages.push(dp);
	}
	return cleanDataPages;
}

export { getRecommendationPagesData }