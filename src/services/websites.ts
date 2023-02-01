import type { RecommendationPage } from "src/utils/types";
import requests from "src/utils/requests";

const getWebsiteData = (url: string) => {
    return requests.get<{html: string} & RecommendationPage>(`/api/scraping?url=${url}`);
}

export {
    getWebsiteData
}