import type { RecommendationPage } from "src/utils/types";
import requests from "src/utils/requests";

const getWebsiteData = (url: string) => {
    return requests.get<RecommendationPage>(`/api/scraping?url=${url}`).catch(() => null);
}

export {
    getWebsiteData
}