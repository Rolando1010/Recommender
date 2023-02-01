import styles from "src/styles/components.module.css";

const Loader = () => {
    return (
        <div className={styles.loaderContainer}>
            <span className={styles.loader}></span>
            <h4>Buscando, por favor espera...</h4>
        </div>
    );
}

export default Loader;