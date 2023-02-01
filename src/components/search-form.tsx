import { FormEvent, useRef } from "react";
import { useRouter } from "next/router";
import useSearch from "src/hooks/use-search";
import styles from "src/styles/search-form.module.css";

const SearchForm = ({ label, placeholder }: {
    label: string,
    placeholder: string,
}) => {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);
    const originalSearch = useSearch();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`?search=${inputRef.current?.value}`)
    }

    return (<>
        <form className={styles.search} onSubmit={handleSubmit}>
            <label>
                <span>{label}</span>
                <input
                    placeholder={placeholder}
                    defaultValue={originalSearch}
                    ref={inputRef}
                />
            </label>
            <button>Buscar</button>
        </form>
    </>);
}

export default SearchForm;