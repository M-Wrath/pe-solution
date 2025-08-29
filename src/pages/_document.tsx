import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Premium electrical services in Florida Keys - VoltCraft Pro delivers professional electrical solutions with cutting-edge technology"
        />
        <meta
          name="keywords"
          content="electrician, Florida Keys, electrical services, smart home, LED lighting, emergency electrical"
        />
        <meta name="author" content="VoltCraft Pro" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="VoltCraft Pro - Premium Electrical Services Florida Keys"
        />
        <meta
          property="og:description"
          content="Professional electrical contractor serving Florida Keys with premium electrical solutions, smart home integration, and 24/7 emergency service."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://voltcraft-pro.com" />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="VoltCraft Pro - Premium Electrical Services"
        />
        <meta
          name="twitter:description"
          content="Professional electrical contractor serving Florida Keys"
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-power-900 text-white antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
