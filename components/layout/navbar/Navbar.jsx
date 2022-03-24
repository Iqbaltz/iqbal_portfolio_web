import styles from "./Navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
        <div className={styles.logo}>
            <Link href="/">
                <a>
                    <img src="/logo.svg" alt="logo" />
                </a>
            </Link>
        </div>

        <div className={styles.menu}>
            {links.map(({title, url, img}) => (
                <a key={title} className={styles.icon} href={url} target="_blank" rel="noopener noreferrer">
                    <img src={img} alt={title} />
                </a>
            ))}
            
            <Link href="/contact">
                <a className={styles.contactBtn}>
                    Contact Me
                </a>
            </Link>
        </div>
    </nav>
  )
}

const links = [
    {
        title: "linkedin",
        url: "https://www.linkedin.com/in/muhammad-iqbal-a5a85a194/",
        img: "/icons/linkedin.svg"
    },
    {
        title: "github",
        url: "https://github.com/Iqbaltz",
        img: "/icons/github.svg"
    },
]