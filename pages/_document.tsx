import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: "Olivia Residence",
    url: "https://www.oliviaresidence.sk",
    logo: "https://www.oliviaresidence.sk/favicon-32x32.png",
    description:
        "Olivia Residence je prémiový rezidenčný projekt v Bratislave ponúkajúci moderné apartmány s nadštandardným vybavením, garážovými státiami a nádherným výhľadom na mesto.",
    telephone: "+421901923324",
    email: "info@oliviaresidence.sk",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Rožňavská 1B",
        addressLocality: "Bratislava",
        addressRegion: "Nové Mesto",
        postalCode: "831 04",
        addressCountry: "SK",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 48.1675,
        longitude: 17.1527,
    },
    hasMap: "https://www.google.com/maps/dir//Ro%C5%BE%C5%88avsk%C3%A1+1a,+831+04+Nov%C3%A9+Mesto",
    numberOfRooms: {
        "@type": "QuantitativeValue",
        unitCode: "APT",
    },
    amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Garážové státia", value: true },
        { "@type": "LocationFeatureSpecification", name: "Výťah", value: true },
        { "@type": "LocationFeatureSpecification", name: "Terasa", value: true },
        { "@type": "LocationFeatureSpecification", name: "Trvalý pobyt", value: true },
    ],
    sameAs: [
        "https://www.facebook.com/oliviaresidence",
        "https://www.instagram.com/oliviaresidence",
    ],
    inLanguage: ["sk", "en"],
}

export default function Document() {
    return (
        <Html>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
                />
            </Head>
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