import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import { Form } from "../components/pages/contact";

export default function Contact() {
  return (
    <Layout>
      <NextSeo title={"Contact"} openGraph={{ title: "Contact" }} />
      <Form />
    </Layout>
  );
}
