import { MagnifyingGlass } from "react-loader-spinner";

const Loader = () => {
    return (<>
        <div>
            <MagnifyingGlass
                glassColor="#c0efff"
                color="var(--primary-1)"
            />
            <h4>Buscando, por favor espera...</h4>
        </div>
        <style jsx>{`
            div {
                text-align: center;
                margin-top: 35px;
            }

            h4 {
                margin: 0;
            }
        `}</style>
    </>);
}

export default Loader;