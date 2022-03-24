import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src="/logoWhite.svg" alt="logo light" />
      <p className={styles.slogan}>
        {footerItem.slogan}
      </p>
      <div className={styles.socials}>
        {footerItem.socials.map(({name, img, url}) => (
            <a className={styles.social} href={url} target="_blank" rel="noopener noreferrer" key={name}>
              <img src={img} alt={name} />
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
  socials: [
    {
      name: "email",
      img: "/icons/email.svg",
      url: "mailto:mhdiqbaltan@gmail.com"
    },
    {
      name: "linkedin",
      img: "/icons/linkedin.svg",
      url: "https://www.linkedin.com/in/muhammad-iqbal-a5a85a194/"
    },
    {
      name: "github",
      img: "/icons/github.svg",
      url: "https://github.com/Iqbaltz"
    },
    {
      name: "whatsapp",
      img: "/icons/whatsapp.svg",
      url: "https://wa.me/6282273077430?text=I%27m%20interested%20in%20working%20with%20you"
    },
    {
      name: "instagram",
      img: "/icons/instagram.svg",
      url: "https://www.instagram.com/iqbal_tan/"
    },
  ]
}