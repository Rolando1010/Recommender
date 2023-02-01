import Link from "next/link";
import styles from "src/styles/navbar.module.css";

const Navbar = () => {
    return(<>
        <header className={styles.navbar}>
            <section>
                <img src="/icon.png" alt="Ícono de recomendaciones"/>
                <h2>Recomendaciones</h2>
            </section>
            <section>
                <Link href="/">Páginas</Link>
                <Link href="/tecnologias/_">Tecnologías</Link>
            </section>
        </header>
    </>);
}

export default Navbar;