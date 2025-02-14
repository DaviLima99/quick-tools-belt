import Head from "next/head";
import AdSense from "./AdSense";

interface Props {
    title: string,
    description: string
}

 const Seo = ({title, description}: Props) => {
    return (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <AdSense pId="9676944737838425"/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9676944737838425" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/vercel.svg" />
    </Head> 
    )
 }

 export default Seo;