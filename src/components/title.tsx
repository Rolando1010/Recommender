import styles from "src/styles/components.module.css";

const Title = ({ children }: { children: string }) => {
    return(<h1 className={styles.title}>{children}</h1>);
}

export default Title;