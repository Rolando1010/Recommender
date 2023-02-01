import RecomendationTechnologies from "src/pages/technologies/list";
import { getRecommendationTechnologies } from "src/services/recommendation-technologies";

export default async ({ children, params }: {
    children: React.ReactNode,
    params: { search: string }
}) => {
    const { search: querySearch } = params;
    const search = querySearch == "_" ? "" : decodeURI(querySearch);
    let recommendationTechnologies: string[] = [];
    if(search){
        recommendationTechnologies = await getRecommendationTechnologies(search);
    }
    return (
        <RecomendationTechnologies
            search={search}
            technologies={recommendationTechnologies}
        >
            {children}
        </RecomendationTechnologies>
    );
}