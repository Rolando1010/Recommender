import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "src/layouts/main";
import "src/styles/global.css";

export default ({ Component, pageProps }: AppProps) => {
    return (<>
        <Head>
            <title>Recomendador</title>
            <link rel="icon" href="/icon.png"/>
            <meta content="IE=edge" httpEquiv="X-UA-Compatible"/>
        </Head>
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    </>);
}