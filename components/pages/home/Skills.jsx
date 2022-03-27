import styles from "./Skills.module.scss";
import { urlFor } from '../../../libs/sanity';

export default function Skills({ data }) {
  return (
    <section className={styles.skills}>
      <div className={styles.wrapper}>
        {data.map(({ icon, title, text, subtitle, subtext }) => (
          <div className={styles.skill} key={title}>
            <img className={styles.icon} src={urlFor(icon)} alt={title} />
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
            <h4 className={styles.subtitle}>{subtitle}</h4>
            <p className={styles.subtext}>{subtext}</p>
          </div>
        ))}
      </div>
    </section>
  );
}