import Layout from "../components/layout";
import {
  About,
  Collaboration,
  Cta,
  Hero,
  Projects,
  Skills,
} from "../components/pages/home";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Collaboration />
      <Cta />
    </Layout>
  );
}
