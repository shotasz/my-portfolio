import styles from "./index.module.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { stickyNavHandler } from "../ui/utilities";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { useEffect, useState, useRef } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef();
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }

    if (ref.current) {
      if (menuOpen) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }

    stickyNavHandler();

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header ref={ref} className={styles.header}>
      <div className={styles.header__content}>
        <h2 className={styles.header__content__logo}>S</h2>
        <nav
          className={`${styles.header__content__nav} ${
            menuOpen ? styles.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <a href="/">About Me</a>
            </li>
            <li>
              <a href="/">Skills</a>
            </li>
            <li>
              <a href="/">Works</a>
            </li>
          </ul>
          <button className={styles.btn}>Contact</button>
        </nav>
        <div className={styles.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}
