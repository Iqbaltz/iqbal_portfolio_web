import Layout from "../components/layout";
import {
  About,
  Collaboration,
  Cta,
  Hero,
  Projects,
  Skills,
} from "../components/pages/home";

import {
  getAboutItem,
  getCompaniesItems,
  getHeroItem,
  getProjectsItems,
  getSkillsItems,
  getSocialItems,
} from "../libs/api";

export default function Home({
  heroItem,
  aboutItem,
  skillsItems,
  projectsItems,
  companiesItems,
  socialItems,
}) {
  return (
    <Layout socials={socialItems}>
      <Hero data={heroItem} />
      <About data={aboutItem} />
      <Skills data={skillsItems} />
      <Projects data={projectsItems} />
      <Collaboration data={companiesItems} />
      <Cta />
    </Layout>
  );
}

export async function getStaticProps() {
  const heroItem = await getHeroItem();
  const aboutItem = await getAboutItem();
  const skillsItems = await getSkillsItems();
  const projectsItems = await getProjectsItems();
  const companiesItems = await getCompaniesItems();
  const socialItems = await getSocialItems();
  return {
    props: {
      heroItem,
      aboutItem,
      skillsItems,
      projectsItems,
      companiesItems,
      socialItems,
    },
    revalidate: 1,
  };
}
