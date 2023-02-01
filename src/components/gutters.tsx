import styles from "src/styles/components.module.css";

const GutterContainer = ({ children }: { children: React.ReactNode }) => <>
    <section className={styles.gutterContainer}>
        {children}
    </section>
</>;

const Gutter = ({ children }: { children: React.ReactNode }) => <>
    <article className={styles.gutter}>
        {children}
    </article>
</>;

export {
    GutterContainer,
    Gutter
}