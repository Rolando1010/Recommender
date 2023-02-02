import { useContext } from "react";
import context from "src/utils/context";

const useGlobalState = () => {
    const { globalState, setGlobalState } = useContext(context) || {};

    const startGlobalState = async (externalSetGlobalState: (state: any) => void) => {
        (setGlobalState || externalSetGlobalState)({ recommendationTechnologies: [] });
    }

    return {
        globalState,
        setGlobalState,
        startGlobalState
    }
}

export default useGlobalState;