import Seo from "@/components/Seo";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="pt">
            <Head>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9676944737838425"
                    crossOrigin="anonymous"
                />
            </Head>
            <body className="bg-slate-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
