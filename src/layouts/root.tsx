import { useEffect, useMemo, useState } from "react";
import Navbar from "./navbar"
import context from "src/utils/context";
import useGlobalState from "src/hooks/use-global-state";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    const [globalState, setGlobalState] = useState<{ globalState: any, setGlobalState: any } | null>(null);
    const valueGlobalState = useMemo(() => ({ globalState, setGlobalState }), [globalState]);
    const { startGlobalState } = useGlobalState();

    useEffect(() => {
        startGlobalState(setGlobalState);
    }, []);

    return(<>
        <context.Provider value={valueGlobalState}>
            <Navbar/>
            {children}
        </context.Provider>
    </>);
}

export default RootLayout