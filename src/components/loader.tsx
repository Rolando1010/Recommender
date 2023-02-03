import { MagnifyingGlass } from "react-loader-spinner";
import styles from "src/styles/components.module.css";

const Loader = () => {
    return (
        <div className={styles.loaderContainer}>
            <MagnifyingGlass
                glassColor="#c0efff"
                color="var(--primary-1)"
            />
            <h4>Buscando, por favor espera...</h4>
        </div>
    );
}

export default Loader;