import styles from "./Form.module.scss";

export default function Form() {
  return (
    <section className={styles.form}>
      <h1 className={styles.title}>{header.title}</h1>
      <p className={styles.subtitle}>{header.subtitle}</p>
      <form action="">
        <div className={styles.flexInput}>
          <div className={styles.half}>
            <label for="name">Name</label>
            <input type="text" id="name" name="Name" />
          </div>
          <div className={styles.half}>
            <label for="email">Email</label>
            <input type="text" id="email" name="Email" />
          </div>
        </div>
        <div className={styles.msgInput}>
          <label for="message">Message</label>
          <textarea name="Message" id="message" cols="30" rows="10"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

const header = {
  title: "How can I help you?",
  subtitle: "Your message will be sent directly to my email",
};
