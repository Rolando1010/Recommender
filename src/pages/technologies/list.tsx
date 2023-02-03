import Link from "next/link";
import styles from "src/styles/technologies.module.css";
import useSearch from "src/hooks/use-search";
import SearchForm from "src/components/search-form";
import Title from "src/components/title";
import EmptyResults from "src/components/empty-results";
import Layout from "src/layouts/main";
import Loading from "src/components/loader";
import { Gutter, GutterContainer } from "src/components/gutters";
import useRecommendationTechnologies from "src/hooks/use-recommendation-technologies";
import Examples from "src/components/examples";
import TextDetail from "src/components/text-detail";

const LABEL = "Que tecnologías debería usar para";

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
    const { recommendationTechnologies, isLoading, aiResponse } = useRecommendationTechnologies();

    return(<>
        <Examples label={LABEL} examples={[
            {text: "Crear aplicación de chat", url: "/tecnologias?search=Crear+aplicación+de+chat"},
            {text: "Crear sitios web", url: "/tecnologias?search=Crear+sitios+web"}
        ]}/>
        <Title>Recomendación de Tecnologías</Title>
        <SearchForm
            label={LABEL}
            placeholder="Que problema tienes?"
            path="/tecnologias"
        />
        <TextDetail text={aiResponse}/>
        {(search && isLoading) && <Loading/>}
        <ul className={styles.technologiesList}>
            {recommendationTechnologies.map(({ name, description }, index) =>
                <li key={`technology-${index}`}>
                    <Link href={`/tecnologias/[name]?search=${search}`} as={`/tecnologias/${name}?search=${search}`}>
                        <span className={styles.technologyName}>{name}{description && ": "}</span>
                        {description}
                    </Link>
                </li>
            )}
        </ul>
        <EmptyResults showable={search && !isLoading} results={recommendationTechnologies}/>
    </>);
}

export default RecomendationTechnologiesContainer;