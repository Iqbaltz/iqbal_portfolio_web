import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import { Form } from "../components/pages/contact";
import { getSocialItems } from "../libs/api";

export default function Contact({ socialItems }) {
  return (
    <Layout socials={socialItems}>
      <NextSeo title={"Contact"} openGraph={{ title: "Contact" }} />
      <Form />
    </Layout>
  );
}

export async function getStaticProps() {
  const socialItems = await getSocialItems();
  return {
    props: {
      socialItems,
    },
    revalidate: 1,
  };
}
