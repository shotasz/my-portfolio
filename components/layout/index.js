import styles from "./index.module.scss";
import { Header } from "../header";
import { Fragment } from "react";
import { useEffect } from "react";
import { revealSectionHandler } from "../ui/utilities";

export function Layout(props) {
  useEffect(() => {
    revealSectionHandler();
  }, []);

  return (
    <Fragment>
      <Header />
      <main className={styles.container}>{props.children}</main>
    </Fragment>
  );
}
