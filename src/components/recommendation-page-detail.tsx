import { useState } from "react"
import styles from "src/styles/recommendation-page-detail.module.css";
import type { RecommendationPage } from "src/utils/types";

const RecommendationPageDetail = ({ icon, description, title, url }: RecommendationPage) => {
    return (
        <div className={styles.recommendationPage}>
            <header>
                <PageIcon src={icon} alt={description}/>
                <h3>{title}</h3>
                <a href={url} target="_blank">
                    <img src="/link.svg" alt={`link to ${title}`}/>
                </a>
            </header>
            {description ?
                <p>{description}</p>
            :
                <p className={styles.noDescription}>Descripción no disponible</p>
            }
        </div>
    );
}

const PageIcon = ({ src, alt, className }: {
    src: string,
    alt: string,
    className?: string
}) => {
    const [imgSrc, setImgSrc] = useState(src);

    return <img 
        src={imgSrc}
        alt={alt}
        className={className || ""}
        onError={() => {
            // console.log(src,"|",(()=>{
            //     const image = new Image();
            //     image.src = imgSrc;
            //     return image.height
            // })());
            setImgSrc("/question.png")
        }}
    />;
}

export default RecommendationPageDetail;