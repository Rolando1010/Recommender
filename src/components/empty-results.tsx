import styles from "src/styles/components.module.css";

const EmptyResults = <T, U>({ showable, results }: { showable: T, results: U[] }) => {
    if(!showable || results.length) return null;

    return(
        <p className={styles.emptyResults}>
            No se encontraron resultados
        </p>
    );
}

export default EmptyResults;