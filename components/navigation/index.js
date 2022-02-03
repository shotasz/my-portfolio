import styles from "./index.module.scss";
import HeaderLogo from "../icons/s-logo";
import { NavigationList } from "./navigation-list";
import { scrollToSection, stickyNavHandler } from "../ui/utilities";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { useDisclosure } from "@chakra-ui/react";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

export function Navigation(props) {
  const item = props.items;
  const listItem = item.slice(1);

  const ref = useRef();

  const [mobileNav, setMobileNav] = useState();
  const [mobileWideNav, setMobileWideNav] = useState();

  function handleResizeNav() {
    function handleResize() {
      if (window.innerWidth <= 480) {
        setMobileNav(true);
        setMobileWideNav(false);
      } else {
        setMobileNav(false);
        setMobileWideNav(true);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }

  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    if (ref.current) {
      if (isOpen) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }

    stickyNavHandler();
    handleResizeNav();

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  return (
    <header ref={ref} className={styles.header}>
      {mobileNav && (
        <div>
          <input type="checkbox" className={styles.checkbox} id="navi-toggle" />

          <label htmlFor="navi-toggle" className={styles.button}>
            <span className={styles.icon}>&nbsp;</span>
          </label>

          <div className={styles.background}>&nbsp;</div>
        </div>
      )}

      {mobileWideNav && (
        <nav className={styles.nav}>
          <ul>
            {listItem &&
              listItem.map((list) => (
                <NavigationList
                  key={list.section}
                  id={list.id}
                  section={list.section}
                />
              ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
