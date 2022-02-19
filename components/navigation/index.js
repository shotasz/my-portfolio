import styles from "./index.module.scss";
import HeaderLogo from "../icons/s-logo";
import { NavigationList } from "./navigation-list";
import { stickyNavHandler } from "../ui/utilities";
import { useEffect, useRef, useState } from "react";
import { StyleIcon, StyleButton } from "../ui/ui";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

export function Navigation({ items }) {
  const listItem = items.slice(1);

  const ref = useRef();

  const [isOpenWindow, setIsOpenWindow] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [mobileWideNav, setMobileWideNav] = useState(false);

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

  useEffect(() => {
    if (ref.current) {
      if (isOpenWindow) {
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
  }, [isOpenWindow]);

  const background = {
    transform: "scale(80)",
  };
  const background2 = {
    transform: "scale(1)",
  };

  const respondDisplay = {
    opacity: "1",
    width: "100%",
  };

  return (
    <header ref={ref} className={styles.header}>
      {mobileNav && (
        <div>
          <StyleButton onClick={() => setIsOpenWindow(!isOpenWindow)}>
            <StyleIcon isOpen={isOpenWindow}>&nbsp;</StyleIcon>
          </StyleButton>

          <div
            className={styles.background}
            style={isOpenWindow ? background : background2}
          >
            &nbsp;
          </div>

          <nav
            className={styles.respondNav}
            style={isOpenWindow ? respondDisplay : null}
          >
            <ul>
              {listItem &&
                listItem.map((list) => (
                  <NavigationList
                    key={list.id}
                    count={list.count}
                    section={list.section}
                    onClick={() => setIsOpenWindow(!isOpenWindow)}
                  />
                ))}
            </ul>
          </nav>
        </div>
      )}

      {mobileWideNav && (
        <>
          <div className={styles.box}>
            <span className={styles.logo}>S</span>
          </div>
          <nav className={styles.nav}>
            <ul>
              {listItem &&
                listItem.map((list) => (
                  <NavigationList
                    key={list.id}
                    count={list.count}
                    section={list.section}
                    fontsize
                    bfFontsize
                  />
                ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
