import styles from "src/styles/main-layout.module.css";

const Layout = ({ children }: { children: React.ReactNode}) => {
    return(
        <main className={styles.layout}>
            {children}
        </main>
    );
}

export default Layout;