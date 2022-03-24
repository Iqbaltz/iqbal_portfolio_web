import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
        <h1 className={styles.title}>Front-end Web Developer, UI/UX Designer</h1>
        <p className={styles.subtitle}>I code and build beautiful simple things, and I love what I do</p>
        <div className={styles.avatar}>
            <img className={styles.ava} src={"/images/ava.png"} alt="avatar" />
            <img className={styles.skl} src="/images/skl.svg" alt="skills" />
        </div>
    </section>
  )
}
