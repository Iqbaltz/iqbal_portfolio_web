import styles from "./About.module.scss";

export default function About({data}) {
  return (
    <section className={styles.about}>
      <div className={styles.decor}>
        <img src="/images/decor.svg" alt="decor" />
      </div>
      <div className={styles.aboutWrapper}>
        <h2 className={styles.greetings}>{data.title}</h2>
        <p className={styles.text}>{data.body}</p>
      </div>
    </section>
  );
}