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

    const setRecommendationTechnologies = (newRecommendationTechnologies: RecommendationTechnology[]) => {
        setGlobalState({recommendationTechnologies: newRecommendationTechnologies, search});
    }

    useEffect(() => {
        if(!search){
            setRecommendationTechnologies([]);
        } else if (recommendationTechnologies.length && oldSearch == search){
            return 
        } else {
            setIsLoading(true);
            getRecommendationTechnologies(search).then(newRecommendationTechnologies => {
                setRecommendationTechnologies(newRecommendationTechnologies);
                setIsLoading(false); 
            });
        }
    }, [search]);

    return {
        recommendationTechnologies,
        isLoading
    }
}

export default useRecommendationTechnologies;