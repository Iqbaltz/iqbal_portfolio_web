import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="robots" content="index,follow" />
          <meta
            name="keywords"
            content="iqbaltan,iqbal,web developer,frontend,ui/ux designer,web designer"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6C79DC" />
          <meta name="msapplication-TileColor" content="#4633C5" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="title"
            property="og:title"
            content="Iqbal's Portfolio Site  | Frontend Web Developer"
          />
          <meta name="type" property="og:type" content="website" />
          <meta
            name="image"
            property="og:image"
            content="https://cdn.sanity.io/images/rkhcfbt7/production/77434737944ad330fadafd810c363324b32eb915-1618x1078.png?w=2000&fit=max&auto=format"
          />
          <meta
            name="url"
            property="og:url"
            content="https://www.muhammadiqbal.tech/"
          />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
