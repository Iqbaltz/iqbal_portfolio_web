import styles from './Hero.module.scss';
import { urlFor } from '../../../libs/sanity';


export default function Hero({data}) {
  return (
    <section className={styles.hero}>
        {/* <h1 className={styles.title}>{data.title}</h1> */}
        <p className={styles.subtitle}>{data.subtitle}</p>
        <div className={styles.avatar}>
            <img className={styles.ava} src={urlFor(data.avatar)} alt="avatar" />
            <img className={styles.skl} src="/images/skl.svg" alt="skills" />
        </div>
    </section>
  )
}
