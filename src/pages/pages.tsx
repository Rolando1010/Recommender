import { useEffect, useState } from "react";
import styles from "src/styles/pages.module.css";
import type { RecommendationPage } from "src/utils/types";
import useSearch from "src/hooks/use-search";
import Title from "src/components/title";
import SearchForm from "src/components/search-form";
import EmptyResults from "src/components/empty-results";
import PageIcon from "src/components/page-icon";
import { getRecommendationPagesData } from "src/services/recommendation-pages";
import Loading from "app/tecnologias/[search]/loading";
import Layout from "src/layouts/main";

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
                    <RecommendationPageItem
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

const RecommendationPageItem = ({ title, description, icon, url }: RecommendationPage) => {
    return(<>
        <header>
            <PageIcon src={icon} alt={description} className={styles.icon}/>
            <h3>{title}</h3>
            <a href={url} target="_blank">
                <img src="/link.svg" alt={`link to ${title}`} className={styles.link}/>
            </a>
        </header>
        {description ?
            <p>{description}</p>
        :
            <p className={styles.noDescription}>Descripción no disponible</p>
        }
    </>);
}

export default RecommendationPages;