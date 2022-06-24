import styles from "./index.module.scss";

import { Link } from "react-scroll";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
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
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const mobileToggleHandler = () => {
    if (document.querySelector("nav").classList.contains(styles.isMenu))
      setMenuOpen((p) => !p);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h2 className={styles.header__content__logo}>S</h2>
        <nav
          className={`${styles.header__content__nav} ${
            menuOpen ? styles.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link
                activeClass={styles.active}
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={mobileToggleHandler}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass={styles.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={mobileToggleHandler}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass={styles.active}
                to="works"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={mobileToggleHandler}
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                activeClass={styles.active}
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={mobileToggleHandler}
              >
                Contact
              </Link>
            </li>
          </ul>
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
