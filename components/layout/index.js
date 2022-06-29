import styles from "./index.module.scss";
import { Header } from "../header";
import { Fragment } from "react";

export function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main className={styles.container}>{props.children}</main>
    </Fragment>
  );
}
