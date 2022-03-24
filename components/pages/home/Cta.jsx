import styles from "./Cta.module.scss";
import Link from "next/dist/client/link";

export default function Cta() {
  return (
    <section className={styles.cta}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{CtaItem.title}</h1>
        <p className={styles.text}>{CtaItem.text}</p>
        <div className={styles.ctaBtn}>
          <h3>
            <Link href={"/contact"}>{CtaItem.btnText}</Link>
          </h3>
        </div>
      </div>
    </section>
  );
}

const CtaItem = {
  title: "Start a Project",
  text: "Interested in working with me? I'm always excited about new projects",
  btnText: "Let's Talk",
};
