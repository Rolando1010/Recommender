import { askAI, Model } from "./ai";
import { extractURLs, isURL } from "src/utils/urls";
import requests from "src/utils/requests";
import { RecommendationPage } from "src/utils/types";

const getRecommendationUrls = async (search: string) => {
	const text = await askAI(
		Model.COMMAND_MEDIUM_NIGHTLY,
		`give me pages where i can ${search} and his full urls`
	);
	console.log("TEXT:", text);
	return text.split("\n").map(extractURLs).flat().filter(isURL);
}

const getRecommendationPagesData = async (search: string) => {
	console.log("-".repeat(20));
	const urls = await getRecommendationUrls(search);
	console.log("URLS:", urls);
	const dataPages = (await Promise.all(urls.map(async url => {
		const data = await requests.get<{html: string} & RecommendationPage>(`/api/scraping?url=${url}`);
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