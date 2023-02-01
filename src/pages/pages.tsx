import { useEffect, useState } from "react";
import Title from "src/components/title";
import styles from "src/styles/pages.module.css";
import type { RecommendationPage } from "src/utils/types";
import useSearch from "src/hooks/use-search";
import SearchForm from "src/components/search-form";
import EmptyResults from "src/components/empty-results";
import PageIcon from "src/components/page-icon";
import { getRecommendationPagesData } from "src/services/recommendation-pages";

const RecommendationPages = () => {
    return (<>
        <Title>Recomendación de páginas</Title>
        <SearchForm
            label="Dame páginas dónde pueda"
            placeholder="Qué buscas?"
        />
        <RecommendationPagesList/>
    </>);
}

const RecommendationPagesList = () => {
    const search = useSearch();
    const [recommendationPages, setRecommendationPages] = useState<RecommendationPage[]>([]);

    useEffect(() => {
        getRecommendationPagesData(search).then(setRecommendationPages);
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
        <EmptyResults showable={search} results={recommendationPages}/>
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