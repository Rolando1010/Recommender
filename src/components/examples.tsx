import { useState } from "react";
import Link from "next/link";
import styles from "src/styles/examples.module.css";

const Examples = ({ label, examples }: { label: string, examples: {
    text: string,
    url: string
}[]}) => {
    const [isVisible, setIsVisible] = useState(false);

    return(<>
        <h3 className={styles.title} onClick={() => setIsVisible(!isVisible)}>Ejemplos »</h3>
        <div className={`${styles.examplesContainer} ${isVisible ? styles.visible : ""}`}>
            <ul className={`${styles.examplesContainer} ${isVisible ? styles.visible : ""}`}>
                {examples.map(({ text, url }, index) =>
                    <li key={`example-${index}`}>
                        <Link href={url}>
                            <div>
                                <span>{label}: </span>
                                {text}
                            </div>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    </>);
}

export default Examples;