import { useEffect, useState } from "react";
import styles from "src/styles/pages.module.css";
import type { RecommendationPage } from "src/utils/types";
import useSearch from "src/hooks/use-search";
import Title from "src/components/title";
import SearchForm from "src/components/search-form";
import EmptyResults from "src/components/empty-results";
import { getRecommendationPagesData } from "src/services/recommendation-pages";
import Loading from "src/components/loader";
import Layout from "src/layouts/main";
import RecommendationPageDetail from "src/components/recommendation-page-detail";
import Examples from "src/components/examples";
import TextDetail from "src/components/text-detail";
import { errorToast } from "src/components/toast";

const LABEL = "Dame páginas dónde pueda"

const RecommendationPages = () => {
    return (<>
        <Layout>
            <Examples label={LABEL} examples={[
                {text: "aprender inglés", url: "/paginas?search=aprender+inglés"},
                {text: "aprender a programar", url: "/paginas?search=aprender+a+programar"}
            ]}/>
            <Title>Recomendación de páginas</Title>
            <SearchForm
                label={LABEL}
                placeholder="Qué buscas?"
            />
            <RecommendationPagesList/>
        </Layout>
    </>);
}

const RecommendationPagesList = () => {
    const search = useSearch();
    const [recommendationPages, setRecommendationPages] = useState<RecommendationPage[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [iaResponse, setIaResponse] = useState("");

    useEffect(() => {
        if(search){
            setIsLoading(true);
            getRecommendationPagesData(search, setIaResponse)
                .then(pagesData => setRecommendationPages(pagesData))
                .catch(error => errorToast(error.message))
                .finally(() => setIsLoading(false));
        }
    }, [search]);

    return (<>
        <TextDetail text={iaResponse}/>
        {isLoading && <Loading/>}
        <ul className={styles.pagesList}>
            {recommendationPages.map(({ title, description, icon, url }, index) => 
                <li key={`recommendation-page-${index}`}>
                    <RecommendationPageDetail
                        title={title}
                        description={description}
                        icon={icon}
                        url={url}
                    />
                </li>
            )}
        </ul>
        <EmptyResults showable={search && !isLoading} results={recommendationPages}/>
    </>);
}

export default RecommendationPages;