import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <section className={styles.skills}>
        <div className={styles.wrapper}>
            {skillsList.map(({img, title, text, subtitle, subtext}) => (
                <div className={styles.skill} key={title}>
                    <img className={styles.icon} src={img} alt={title} />
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.text}>{text}</p>
                    <h4 className={styles.subtitle}>{subtitle}</h4>
                    <p className={styles.subtext}>{subtext}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

const skillsList  = [
    {
        img: "/icons/react.svg",
        title: "Front-end",
        text: `I like to code things from scratch, and enjoy bringing ideas to life in the browser.`,
        subtitle: "Lenguages I speak:",
        subtext: `HTML, SCSS, JS, React.js, Node.js, Next.Js`
    },
    {
        img: "/icons/database.svg",
        title: "Back-end",
        text: `I create structured, effective and efficient database to store all your valuable data.`,
        subtitle: "Database I use:",
        subtext: `MongoDB, MySQL`
    },
    {
        img: "/icons/adobe.svg",
        title: "UI/UX",
        text: `I value simple content structure, clean design patterns, and thoughtful interactions.`,
        subtitle: "Things I usually design:",
        subtext: `UX, UI, Web, Mobile, Logos`
    },
]