const EmptyResults = <T, U>({ showable, results }: { showable: T, results: U[] }) => {
    if(!showable || results.length) return null;

    return(<>
        <p>
            No se encontraron resultados
        </p>
        <style jsx>{`
            p{
                margin: 0;
                text-align: center;
                font-size: 22px;
                color: var(--light-1);
            }
        `}</style>
    </>);
}

export default EmptyResults;