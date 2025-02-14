import '@/styles/globals.css'
import { AppProps } from "next/app";
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout';
import { siteMetadata } from '../data/siteMetadata';
import Seo from '@/components/Seo';

export default function App({ Component, pageProps: { ...pageProps } }: AppProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
            <Seo title="Quick Tools Belt" description=""/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}