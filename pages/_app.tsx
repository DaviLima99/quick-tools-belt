import { useRouter } from 'next/router';
import '../styles/globals.css'
import { AppProps } from "next/app";
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout';
import { siteMetadata } from '../data/siteMetadata';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}