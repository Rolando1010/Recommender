import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "src/styles/technologies.module.css";
import type { RecommendationTechnology } from "src/utils/types";
import useSearch from "src/hooks/use-search";
import SearchForm from "src/components/search-form";
import Title from "src/components/title";
import EmptyResults from "src/components/empty-results";
import Layout from "src/layouts/main";
import Loading from "src/components/loader";
import { Gutter, GutterContainer } from "src/components/gutters";
import { getRecommendationTechnologies } from "src/services/recommendation-technologies";

const RecomendationTechnologiesContainer = ({ children }: { children: React.ReactNode }) => {
    return(
        <GutterContainer>
            <Gutter>
                <Layout>
                    <RecomendationTechnologiesPanel/>
                </Layout>
            </Gutter>
            {children}
        </GutterContainer>
    );
}

const RecomendationTechnologiesPanel = () => {
    const search = useSearch();
    const [technologies, setTechnologies] = useState<RecommendationTechnology[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getRecommendationTechnologies(search).then(recommendationTechnologies => {
            setTechnologies(recommendationTechnologies);
            setIsLoading(false); 
        });
    }, [search]);

    return(<>
        <Title>Recomendación de Tecnologías</Title>
        <SearchForm
            label="Que tecnologías debería usar para"
            placeholder="Que problema tienes?"
        />
        <ul className={styles.technologiesList}>
            {technologies.map(({ name, description }, index) =>
                <li key={`technology-${index}`}>
                    <Link href={`/tecnologias/${name}?search=${search}`}>
                        <span className={styles.technologyName}>{name}{description && ": "}</span>
                        {description}
                    </Link>
                </li>
            )}
        </ul>
        <EmptyResults showable={search && !isLoading} results={technologies}/>
        {(search && isLoading) && <Loading/>}
    </>);
}

export default RecomendationTechnologiesContainer;