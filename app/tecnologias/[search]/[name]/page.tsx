import TechnologyDetail from "src/pages/technologies/technology-detail";
import { getTechnologyPageData } from "src/services/recommendation-technologies";

export default async ({ params }: {params: { name: string }}) => {
    const { name } = params;
    const pageData = await getTechnologyPageData(name);
    return (
        <TechnologyDetail pageData={pageData}/>
    );
}