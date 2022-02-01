import styles from "./index.module.scss";
import HeaderLogo from "../icons/s-logo";
import { NavigationList } from "./navigation-list";
import { scrollToSection, stickyNavHandler } from "../ui/utilities";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { useDisclosure, IconButton, Flex } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const InnerNav = styled.div`
  position: fixed;
  top: 100%;
  width: 100%;
  background-color: var(--color-navy);
  transition: var(--transition);

  ul {
    padding: 0;
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

      {/* <div className={mobileNav ? styles.hamburger : styles.none}>
        <button className={styles.btn} onClick={onToggle}>
          <span>{!isOpen ? "T" : "C"}</span>
          <span>{!isOpen ? "O" : "L"}</span>
          <span>{!isOpen ? "U" : "O"}</span>
          <span>{!isOpen ? "C" : "S"}</span>
          <span>{!isOpen ? "H" : "E"}</span>
        </button>
      </div> */}
      {mobileNav && (
        <Flex
          color={"var(--color-slate)"}
          py={{ base: 2 }}
          px={{ base: 8 }}
          align={"center"}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={25} h={25} />
              ) : (
                <HamburgerIcon w={30} h={30} />
              )
            }
            variant={"unstyled"}
          />
        </Flex>
      )}

      {isOpen && (
        <InnerNav onClick={onToggle}>
          <ul>
            {listItem &&
              isOpen &&
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
