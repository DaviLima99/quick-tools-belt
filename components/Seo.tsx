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
        <link rel="icon" href="/favicon.ico" />
    </Head> 
    )
 }

 export default Seo;