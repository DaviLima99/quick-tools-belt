import Head from "next/head";

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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9676944737838425" crossOrigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
    </Head> 
    )
 }

 export default Seo;