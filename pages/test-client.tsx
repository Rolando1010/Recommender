import { useEffect } from "react";
import { useRouter } from 'next/router'
import { askAI, Model } from "src/services/ai";

export default () => {
    const router = useRouter()
    const {search} = router.query
    console.log(search);
    
    useEffect(() => {
        (async () => {
            console.log(await askAI(Model.COMMAND_MEDIUM_NIGHTLY, "tell me something"));
        })();
    });

    return (
        <h1>Page</h1>
    );
}