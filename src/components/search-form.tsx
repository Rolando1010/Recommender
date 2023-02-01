import styles from "src/styles/search-form.module.css";

const SearchForm = (
    { label, placeholder, search, path }: {
        label: string,
        placeholder: string,
        search: string,
        path?: string
    }) => {
    return (<>
        <form className={styles.search} action={path || ""}>
            <label>
                <span>{label}</span>
                <input placeholder={placeholder} name="search" defaultValue={search}/>
            </label>
            <button>Buscar</button>
        </form>
    </>);
}

export default SearchForm;