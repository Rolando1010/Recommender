import useSearch from "src/hooks/use-search";
import styles from "src/styles/search-form.module.css";

const SearchForm = ({ label, placeholder, path }: {
    label: string,
    placeholder: string,
    path?: string
}) => {
    const originalSearch = useSearch();

    return (<>
        <form className={styles.search} action={path || ""}>
            <label>
                <span>{label}</span>
                <input
                    placeholder={placeholder}
                    defaultValue={originalSearch}
                    name="search"
                />
            </label>
            <button>Buscar</button>
        </form>
    </>);
}

export default SearchForm;