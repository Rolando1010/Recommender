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

const RecommendationPages = () => {
    return (<>
        <Layout>
            <Title>Recomendación de páginas</Title>
            <SearchForm
                label="Dame páginas dónde pueda"
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

    useEffect(() => {
        if(search){
            setIsLoading(true);
            getRecommendationPagesData(search).then(pagesData => {
                setRecommendationPages(pagesData);
                setIsLoading(false);
            });
        }
    }, [search]);

    return (<>
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
        {isLoading && <Loading/>}
    </>);
}

export default RecommendationPages;