const EmptyResults = <T, U>({ showable, results }: { showable: T, results: U[] }) => {
    if(!showable || results.length) return null;

    return(<>
        <div className="container">
            <span>No se encontraron resultados</span>
            <div className="tooltip">
                <img src="/info.svg"/>
                <span className="tooltip-text">Es probable que los enlaces ofrecidos por la IA no existieran o no estuvieran en un formato que permitiera leerlos, o que se durara mucho tiempo al analizar la página.</span>
            </div>
        </div>
        <style jsx>{`
            .container {
                font-size: 22px;
                color: var(--light-3);
                display: flex;
                justify-content: center;
                gap: 10px;
            }

            img {
                width: 30px;
            }

            .tooltip .tooltip-text {
                visibility: hidden;
                width: 150px;
                background-color: var(--background-1);
                opacity: .95;
                color: #fff;
                border-radius: var(--border-radius);
                padding: 5px 10px;
                position: absolute;
                font-size: 18px;
                margin-top: -20px;
                right: 150px;
                border: 1px solid var(--light-1);
            }

            .tooltip:hover .tooltip-text,
            .tooltip:focus .tooltip-text {
                visibility: visible;
            }
        `}</style>
    </>);
}

export default EmptyResults;