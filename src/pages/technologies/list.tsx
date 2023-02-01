import Link from "next/link";
import styles from "src/styles/technologies.module.css";
import type { Props } from "./props";
import SearchForm from "src/components/search-form";
import Title from "src/components/title";
import { Gutter, GutterContainer } from "src/components/gutters";
import EmptyResults from "src/components/empty-results";
import Layout from "src/layouts/main";

const RecomendationTechnologiesContainer = ({
    children,
    search,
    technologies
}: { children: React.ReactNode } & Props) => {
    return(
        <GutterContainer>
            <Gutter>
                <Layout>
                    <RecomendationTechnologiesPanel
                        search={search}
                        technologies={technologies}
                    />
                </Layout>
            </Gutter>
            {children}
        </GutterContainer>
    );
}

const RecomendationTechnologiesPanel = ({ search, technologies }: Props) => {
    return(<>
        <Title>Recomendación de Tecnologías</Title>
        <SearchForm
            path="/tecnologias"
            label="Que tecnologías debería usar para"
            placeholder="Que problema tienes?"
            search={search}
        />
        <ul className={styles.technologiesList}>
            {technologies.map((technology, index) =>
                <li key={`technology-${index}`}>
                    <Link href={`/tecnologias/${search}/${technology}`}>{technology}</Link>
                </li>
            )}
        </ul>
        <EmptyResults showable={search} results={technologies}/>
    </>);
}

export default RecomendationTechnologiesContainer;