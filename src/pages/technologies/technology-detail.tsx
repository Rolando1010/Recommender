import { Gutter } from "src/components/gutters";
import styles from "src/styles/technologies.module.css";
import type { RecommendationPage } from "src/utils/types";
import EmptyResults from "src/components/empty-results";
import PageIcon from "src/components/page-icon";

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <Gutter>
            <div className={styles.technologyPageContainer}>
                {children}
            </div>
        </Gutter>
    );
}

const TechnologyDetail = ({ pageData }: { pageData: ({html: string} & RecommendationPage) | null}) => {
    if(!pageData){
        return <EmptyResults showable={true} results={[]}/>
    }
    
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

export { Container }

export default TechnologyDetail;