import styles from "./index.module.scss";
import HeaderLogo from "../icons/s-logo";
import { NavigationList } from "./navigation-list";
import { scrollToSection, stickyNavHandler } from "../ui/utilities";
import { useEffect, useState } from "react";
import styled from "styled-components";

const InnerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: ${(props) => props.height};
  width: 100vw;
  background-color: var(--color-navy);
  transition: var(--transition);

  ul {
    padding: 5rem 0;
    list-style: none;
  }

  li {
    text-align: center;
    margin: 5rem 0;
  }
`;

export function Navigation(props) {
  const item = props.items;
  const listItem = item.slice(1);

  const [mobileNav, setMobileNav] = useState();
  const [mobileWideNav, setMobileWideNav] = useState();
  const [visibleNav, setVisibleNav] = useState(false);

  const closeNavBar = () => setVisibleNav(false);

  function handleMobileNav() {
    setVisibleNav(!visibleNav);
  }

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
    stickyNavHandler();
    handleResizeNav();
  }, []);

  return (
    <header className={styles.header}>
      <h1>
        <a section="hero" onClick={scrollToSection}>
          <HeaderLogo />
        </a>
      </h1>

      <nav className={mobileWideNav ? styles.nav : styles.none}>
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

      <div className={mobileNav ? styles.hamburger : styles.none}>
        <button className={styles.btn} onClick={handleMobileNav}>
          <span>{!visibleNav ? "T" : "C"}</span>
          <span>{!visibleNav ? "O" : "L"}</span>
          <span>{!visibleNav ? "U" : "O"}</span>
          <span>{!visibleNav ? "C" : "S"}</span>
          <span>{!visibleNav ? "H" : "E"}</span>
        </button>
      </div>

      {visibleNav && (
        <InnerNav height={visibleNav ? "100vh" : "0"} onClick={closeNavBar}>
          <ul>
            {listItem &&
              visibleNav &&
              listItem.map((list) => (
                <NavigationList
                  key={list.section}
                  id={list.id}
                  section={list.section}
                />
              ))}
          </ul>
        </InnerNav>
      )}
    </header>
  );
}
