import ReactDOM from "react-dom";

import styles from "./notification.module.scss";

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = styles.success;
  }

  if (status === "error") {
    statusClasses = styles.error;
  }

  const cssClasses = `${styles.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")
  );
}

export default Notification;
