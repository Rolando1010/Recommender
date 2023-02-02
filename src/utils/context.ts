import { createContext } from "react";

const context = createContext<{ globalState: any, setGlobalState: any } | null>(null);

export default context;