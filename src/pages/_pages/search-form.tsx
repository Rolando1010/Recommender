import Title from "src/components/title";
import { default as BaseSearchForm} from "src/components/search-form";

const SearchForm = ({ search }: { search: string }) => {
    return (<>
        <Title>Recomendación de páginas</Title>
        <BaseSearchForm
            label="Dame páginas dónde pueda"
            placeholder="Qué buscas?"
            search={search}
        />
    </>);
}

export default SearchForm;