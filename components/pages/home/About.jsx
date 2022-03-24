import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.decor}>
        <img src="/images/decor.svg" alt="decor" />
      </div>
      <div className={styles.aboutWrapper}>
        <h2 className={styles.greetings}>{textLine.greetings}</h2>
        <p className={styles.text}>{textLine.text}</p>
      </div>
    </section>
  );
}

const textLine = {
  greetings: "Hi, I'm Iqbal. Nice to meet you!",
  text: `I am a self-taught web developer based in Medan, Indonesia. I've done work as a freelancer, work for agencies, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my skills on one code problem at a time.`,
};
