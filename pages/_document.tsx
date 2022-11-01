import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
            {/*Google Tag Manager (noscript)*/}
            <noscript>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCZ89HB"
                        height="0" width="0" style={{display:'none', visibility: 'hidden'}}>
                </iframe>
            </noscript>
            {/*End Google Tag Manager (noscript) */}
            <Main />
            <NextScript />
            <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="fefafcaa-5d1e-4369-84f5-b19f54db2b38" data-blockingmode="auto" type="text/javascript" strategy="beforeInteractive"/>
            </body>
        </Html>
    )
}