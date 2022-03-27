import { urlFor } from "../../../libs/sanity";
import styles from "./Footer.module.scss";

export default function Footer({socials}) {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src="/logoWhite.svg" alt="logo light" />
      <p className={styles.slogan}>
        {footerItem.slogan}
      </p>
      <div className={styles.socials}>
        {socials.map(({name, icon, url}) => (
            <a className={styles.social} href={url} target="_blank" rel="noopener noreferrer" key={name}>
              <img src={urlFor(icon)} alt={name} />
            </a>
        ))}
      </div>
      <p className={styles.copy}>
        Created by Me | © 2021
      </p>
    </footer>
  );
}

const footerItem = {
  slogan: "Living, Learning and Leveling up one day at a time.",
}