import Head from "next/head";
import AdSense from "./AdSense";
import Script from "next/script";

interface Props {
    title: string,
    description: string
}

const Seo = ({ title, description }: Props) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
            <link rel="icon" href="/vercel.svg" />
        </Head>
    )
}

export default Seo;