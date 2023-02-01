import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "src/styles/technologies.module.css";
import type { RecommendationPage } from "src/utils/types";
import EmptyResults from "src/components/empty-results";
import PageIcon from "src/components/page-icon";
import RecomendationTechnologiesContainer from "./list";
import Loading from "src/components/loader";
import { Gutter } from "src/components/gutters";
import { getTechnologyPageData } from "src/services/recommendation-technologies";
import { queryStringToString } from "src/utils/query";

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
    const [pageData, setPageData] = useState<({html: string} & RecommendationPage) | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const  { name } = router.query;

    useEffect(() => {
        setIsLoading(true);
        getTechnologyPageData(queryStringToString(name)).then(pageData => {
            setPageData(pageData);
            setIsLoading(false);
        });
    }, [name])

    if(isLoading) return <Loading/>;
    if(!pageData) return <EmptyResults showable={true} results={[]}/>
    return (
        <section className={styles.technologyPage}>
            <header className={styles.technologyHead}>
                <PageIcon src={pageData.icon} alt={pageData.description}/>
                <h3>{pageData.title}</h3>
                <a href={pageData.url} target="_blank">
                    <img src="/link.svg" className={styles.link}/>
                </a>
            </header>
            <p>{pageData.description}</p>
            <iframe
                width="100%"
                srcDoc={pageData.html}
                height="500px"
            ></iframe>
        </section>
    );
}

export default TechnologyDetailPage;