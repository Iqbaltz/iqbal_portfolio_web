import styles from "./Form.module.scss";
import { useState } from "react";

export default function Form() {
  const [status, setStatus] = useState("");

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };
  return (
    <section className={styles.form}>
      <h1 className={styles.title}>{header.title}</h1>
      <p className={styles.subtitle}>{header.subtitle}</p>
      <form
        onSubmit={submitForm}
        action="https://formspree.io/f/xdoppqnk"
        method="POST"
      >
        <div className={styles.flexInput}>
          <div className={styles.half}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="Name" />
          </div>
          <div className={styles.half}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="Email" />
          </div>
        </div>
        <div className={styles.msgInput}>
          <label htmlFor="message">Message</label>
          <textarea name="Message" id="message" cols="30" rows="10"></textarea>
        </div>
        {status === "SUCCESS" ? (
          <p>Thank you for contacting me!</p>
        ) : (
          <button type="submit">Send Message</button>
        )}
        {status === "ERROR" && <p>Oops! Something went wrong</p>}
      </form>
    </section>
  );
}

const header = {
  title: "How can I help you?",
  subtitle: "Your message will be sent directly to my email",
};
