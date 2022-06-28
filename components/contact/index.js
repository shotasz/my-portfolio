import styles from "./index.module.scss";
import Notification from "../ui/notification";
import { useState, useEffect } from "react";

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

export function Contact() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  // const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        // setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredMessage("");
      setEnteredEmail("");
      setEnteredName("");
    } catch (error) {
      // setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "送信中",
      message: "あなたのメッセージを送信しています",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "成功",
      message: "あなたのメッセージが送信されました",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "失敗",
      message: "送信中にエラーが発生しました",
    };
  }

  return (
    <section className={styles.contact} id="contact">
      <span className={styles.contact__section_start}>&lt;section&gt;</span>
      <span className={styles.contact__h2_start}>&lt;h2&gt;</span>
      <h2>Contact Me</h2>
      <span className={styles.contact__h2_end}>&lt;/h2&gt;</span>
      <span className={styles.contact__form_start}>&lt;form&gt;</span>
      <form className={styles.form} onSubmit={sendMessageHandler}>
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
          <button className={styles.btn}>SEND MAIL</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <span className={styles.contact__form_end}>&lt;/form&gt;</span>
      <span className={styles.contact__section_end}>&lt;/section&gt;</span>
    </section>
  );
}
