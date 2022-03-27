import styles from "./Projects.module.scss";
import { urlFor } from "../../../libs/sanity";

export default function Projects({data}) {
  return (
    <section className={styles.projects}>
      <h1 className={styles.title}>{heading.title}</h1>
      <p className={styles.subtitle}>{heading.subtitle} <a href="mailto:mhdiqbaltan@gmail.com">Contact me</a></p>
      <div className={styles.wrapper}>
        {data.map(({image, caption, url},i) => (
          <div className={styles.project} key={i}>
            <img src={urlFor(image)} alt={caption} />
            <p className={styles.desc}>{caption}</p>
            <a href={url} className={styles.linkBtn}>Visit Website</a>
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
