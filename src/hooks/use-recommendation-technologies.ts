import { RecommendationTechnology } from "src/utils/types";
import useGlobalState from "./use-global-state";

const useRecommendationTechnologies = () => {
    const { globalState, setGlobalState } = useGlobalState();
    
    const recommendationTechnologies: RecommendationTechnology[] = globalState?.recommendationTechnologies || [];

    const setRecommendationTechnologies = (newRecommendationTechnologies: RecommendationTechnology[]) => {
        setGlobalState({recommendationTechnologies: newRecommendationTechnologies});
    }

    return {
        recommendationTechnologies,
        setRecommendationTechnologies
    }
}

export default useRecommendationTechnologies;