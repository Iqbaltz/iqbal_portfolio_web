import styles from "./Collaboration.module.scss";

export default function Collaboration() {
  return (
    <section className={styles.collab}>
      <h1 className={styles.title}>{collabItem.title}</h1>
      <div className={styles.companies}>
          {collabItem.companies.map(({name, src}) => (
              <div className={styles.company} key={name}>
                  <img src={src} alt={name} />
              </div>
          ))}
      </div>
    </section>
  );
}

const collabItem = {
  title: "I am proud to have collaborated with some amazing companies:",
  companies: [
    {
      name: "mejakreatif",
      src: "/images/collab/mekraf.png",
    },
    {
      name: "sbs-cosmetics",
      src: "/images/collab/sbs.png",
    },
    {
      name: "agorsumatera",
      src: "/images/collab/agro.png",
    },
    {
      name: "fiverr",
      src: "/images/collab/fiverr.png",
    },
  ],
};
