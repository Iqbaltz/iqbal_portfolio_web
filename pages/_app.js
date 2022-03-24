import "../styles/globals.scss";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { pageview } from "/libs/ga";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
