import type { AppProps } from "next/app";
import Head from "next/head";
import RootLayout from "src/layouts/root";
import "src/styles/global.css";

export default ({ Component, pageProps }: AppProps) => {
    return (<>
        <Head>
            <title>Recommender</title>
            <link rel="icon" href="/icon.png"/>
            <meta content="IE=edge" httpEquiv="X-UA-Compatible"/>
        </Head>
        <RootLayout>
            <Component {...pageProps}/>
        </RootLayout>
    </>);
}