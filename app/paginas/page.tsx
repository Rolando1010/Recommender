import type { RecommendationPage } from "src/utils/types";
import { getRecommendationPagesData } from "src/services/recommendation-pages";
import RecommendationPagesList from "./component";

export default async ({ params, searchParams }: {params: any, searchParams: { search: string }}) => {
    params.search = searchParams.search;
    const { search } = searchParams;
    let recommendationPages: RecommendationPage[] = [];
    if(search){
        recommendationPages = await getRecommendationPagesData(search);
    }
    return (
        <RecommendationPagesList
            search={search}
            pages={recommendationPages}            
        />
    );
}