import styles from "src/styles/main-layout.module.css";
import Navbar from "./navbar";

const Layout = ({ children }: { children: React.ReactNode}) => {
    return(<>
        <Navbar/>
        <main className={styles.layout}>
            {children}
        </main>
    </>);
}

export default Layout;