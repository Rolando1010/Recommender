import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "src/layouts/navbar";
import "src/styles/global.css";

export default ({ Component, pageProps }: AppProps) => {
    return (<>
        <Navbar/>
        <Head>
            <title>Recomendador</title>
            <link rel="icon" href="/icon.png"/>
            <meta content="IE=edge" httpEquiv="X-UA-Compatible"/>
        </Head>
        <Component {...pageProps}/>
    </>);
}