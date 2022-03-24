import styles from "./Projects.module.scss";
import Image from "next/image";

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h1 className={styles.title}>{heading.title}</h1>
      <p className={styles.subtitle}>{heading.subtitle} <a href="mailto:mhdiqbaltan@gmail.com">Contact me</a></p>
      <div className={styles.wrapper}>
        {projects.map(({img, about, link},i) => (
          <div className={styles.project} key={i}>
            <Image src={img} alt="project" layout="fill" objectFit="cover" />
            <p className={styles.desc}>{about}</p>
            <a href={link} className={styles.linkBtn}>Visit Website</a>
          </div>
        ))}
      </div>
    </section>
  );
}

const heading = {
  title: "My Recent Work",
  subtitle:
    "Here are some things I've been working on recently, want to see more?",
};

const projects = [
  {
    img: "/images/projects/metif.png",
    about: `A branding agency website with Blog's and Project's feature, and using headless CMS`,
    link: "http://mejakreatif.com/",
  },
  {
    img: "/images/projects/sbs.png",
    about: `A company profile website, SBS Cosmetics is a multinational cosmetics contract manufacturer in Indonesia`,
    link: "http://sbs-cosmetics.com/",
  },
  {
    img: "/images/projects/seyma.png",
    about: `A personal portfolio site, Seyma is a talented UI/UX designer`,
    link: "https://www.seymaermis.com/",
  },
  {
    img: "/images/projects/nibras.png",
    about: `A personal portfolio site, Nibras is a software engineer`,
    link: "https://nibras-muhsin.herokuapp.com/",
  },
  {
    img: "/images/projects/agro.png",
    about: `Company profile website with Blog's and Project's feature, and headless CMS`,
    link: "http://agrosumatera.com/",
  },
  {
    img: "/images/projects/flateria.png",
    about: `My Personal Project, This app let you create your own color palette`,
    link: "https://flateriauicolors.netlify.app/",
  },
];
