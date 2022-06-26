import styles from "./index.module.scss";
import { useState, useEffect } from "react";

export function Contact() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  return (
    <section className={styles.contact} id="contact">
      <span className={styles.contact__section_start}>&lt;section&gt;</span>
      <span className={styles.contact__h2_start}>&lt;h2&gt;</span>
      <h2>Contact Me</h2>
      <span className={styles.contact__h2_end}>&lt;/h2&gt;</span>
      <span className={styles.contact__form_start}>&lt;form&gt;</span>
      <form className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div className={styles.actions}>
          <a href="mailto:s2shota123@gmail.com" target="_blank">
            <button className={styles.btn}>SEND MAIL</button>
          </a>
        </div>
        {/* <span className={styles.contact__button_start}>&lt;button&gt;</span>
        <a href="mailto:s2shota123@gmail.com" target="_blank">
          <button className={styles.btn}>SEND MAIL</button>
        </a>
        <span className={styles.contact__button_end}>&lt;/button&gt;</span> */}
      </form>
      <span className={styles.contact__form_end}>&lt;/form&gt;</span>
      <span className={styles.contact__section_end}>&lt;/section&gt;</span>
    </section>
  );
}
