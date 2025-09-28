import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Professional electrical engineering services in Austria - PE Solutions delivers expert electrical solutions with modern technology"
        />
        <meta
          name="keywords"
          content="electrician, Austria, electrical engineering, technical drafting, project management, energy consulting"
        />
        <meta name="author" content="PE Solutions" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="PE Solutions - Professional Electrical Engineering Services Austria"
        />
        <meta
          property="og:description"
          content="Professional electrical engineering contractor serving Austria with expert electrical solutions, technical drafting, and project management services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pe-solutions.at" />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PE Solutions - Professional Electrical Engineering Services"
        />
        <meta
          name="twitter:description"
          content="Professional electrical engineering contractor serving Austria"
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
