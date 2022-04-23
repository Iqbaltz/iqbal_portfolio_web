import styles from "./Projects.module.scss";
import { urlFor } from "../../../libs/sanity";

export default function Projects({ data }) {
  return (
    <section className={styles.projects}>
      <h1 className={styles.title}>{heading.title}</h1>
      <p className={styles.subtitle}>
        {heading.subtitle} <a href="mailto:mhdiqbaltan@gmail.com">Contact me</a>
      </p>
      <div className={styles.wrapper}>
        {data.map(({ image, caption, url }, i) => (
          <div className={styles.project} key={i}>
            <img src={urlFor(image)} alt={caption} />
            <p className={styles.desc}>{caption}</p>
            <a
              href={url}
              className={styles.linkBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
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
