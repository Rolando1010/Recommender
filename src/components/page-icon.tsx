"use client";
import { useState } from "react"

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
        onError={() => {console.log(src,"|",(()=>{
            const image = new Image();
            image.src = imgSrc;
            return image.height
        })());setImgSrc("/question.png")}}
    />;
}

export default PageIcon;