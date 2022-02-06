import styles from "./index.module.scss";
import HeaderLogo from "../icons/s-logo";
import { NavigationList } from "./navigation-list";
import { scrollToSection, stickyNavHandler } from "../ui/utilities";
import { useEffect, useRef, useState } from "react";
import { StyleIcon, StyleButton } from "../ui/ui";

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

  const background = {
    transform: "scale(80)",
  };

  const respondDisplay = {
    opacity: "1",
    width: "100%",
  };

  return (
    <header ref={ref} className={styles.header}>
      {mobileNav && (
        <div>
          <StyleButton onClick={onToggle}>
            <StyleIcon isOpen={isOpen}>&nbsp;</StyleIcon>
          </StyleButton>

          <div className={styles.background} style={isOpen ? background : null}>
            &nbsp;
          </div>

          <nav
            className={styles.respondNav}
            style={isOpen ? respondDisplay : null}
          >
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
