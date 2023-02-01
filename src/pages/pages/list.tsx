import { useEffect, useState } from "react";
import type { RecommendationPage } from "src/utils/types";
import styles from "src/styles/pages.module.css";
import EmptyResults from "src/components/empty-results";
import PageIcon from "src/components/page-icon";

const RecommendationPagesList = ({ search, pages }: {
    search: string,
    pages: RecommendationPage[]
}) => {
    return (<>
        <ul className={styles.pagesList}>
            {pages.map(({ title, description, icon, url }, index) => 
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
        <EmptyResults showable={search} results={pages}/>
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

export default RecommendationPagesList;