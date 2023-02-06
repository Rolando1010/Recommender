import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "src/styles/technologies.module.css";
import type { RecommendationPage } from "src/utils/types";
import EmptyResults from "src/components/empty-results";
import RecomendationTechnologiesContainer from "./list";
import Loading from "src/components/loader";
import { Gutter } from "src/components/gutters";
import { getTechnologyPageData } from "src/services/recommendation-technologies";
import { queryStringToString } from "src/utils/text";
import RecommendationPageDetail from "src/components/recommendation-page-detail";
import TextDetail from "src/components/text-detail";
import { errorToast } from "src/components/toast";

const TechnologyDetailPage = () => {
    return (
        <RecomendationTechnologiesContainer>
            <Gutter>
                <div className={styles.technologyPageContainer}>
                    <TechnologyDetail/>
                </div>
            </Gutter>
        </RecomendationTechnologiesContainer>
    );
}

const TechnologyDetail = () => {
    const [pageData, setPageData] = useState<RecommendationPage | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [aiResponse, setAIResponse] = useState("");
    const router = useRouter();
    const  { name } = router.query;
    
    useEffect(() => {
        setIsLoading(true);
        getTechnologyPageData(queryStringToString(name), setAIResponse)
            .then(pageData => setPageData(pageData))
            .catch(error => errorToast(error.message))
            .finally(() => setIsLoading(false));
    }, [name])

    if(isLoading) return <Loading/>;
    return (<>
        <TextDetail text={aiResponse}/>
        {pageData ?
            <section className={styles.technologyPage}>
                <RecommendationPageDetail
                    title={pageData.title}
                    description={pageData.description}
                    icon={pageData.icon}
                    url={pageData.url}
                />
                <iframe
                    width="100%"
                    srcDoc={pageData.html}
                    height="500px"
                ></iframe>
            </section>
        : <>
            <div className={styles.space}></div>
            <EmptyResults showable={true} results={[]}/>
        </>}
    </>);
}

export default TechnologyDetailPage;