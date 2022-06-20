import { Header } from "../header";
import styles from "./index.module.scss";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
    </>
  );
}
