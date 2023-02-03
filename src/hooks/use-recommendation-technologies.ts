import { useEffect, useState } from "react";
import { getRecommendationTechnologies } from "src/services/recommendation-technologies";
import { RecommendationTechnology } from "src/utils/types";
import useGlobalState from "./use-global-state";
import useSearch from "./use-search";

const useRecommendationTechnologies = () => {
    const [isLoading, setIsLoading] = useState(false);
    const search = useSearch();
    const { globalState, setGlobalState } = useGlobalState();
    
    const recommendationTechnologies: RecommendationTechnology[] = globalState?.recommendationTechnologies || [];
    const oldSearch: string = globalState?.search || "";
    const aiResponse: string = globalState?.aiResponse || "";

    const setRecommendationTechnologies = (newRecommendationTechnologies: RecommendationTechnology[], newAIResponse?: string) => {
        setGlobalState({
            recommendationTechnologies: newRecommendationTechnologies,
            search,
            aiResponse: newAIResponse || ""
        });
    }

    useEffect(() => {
        if(!search){
            setRecommendationTechnologies([]);
        } else if (recommendationTechnologies.length && oldSearch == search){
            return 
        } else {
            setIsLoading(true);
            let newAIResponse = ""
            getRecommendationTechnologies(search, recommendation => {
                newAIResponse = recommendation;
            }).then(newRecommendationTechnologies => {
                setRecommendationTechnologies(newRecommendationTechnologies, newAIResponse);
                setIsLoading(false); 
            });
        }
    }, [search]);

    return {
        recommendationTechnologies,
        isLoading,
        aiResponse
    }
}

export default useRecommendationTechnologies;