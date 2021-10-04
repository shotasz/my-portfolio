import styles from "./index.module.scss";
import HeaderLogo from "../icons/s-logo";
import Link from "next/link";

export function Navigation() {
  function scrollToSection(entry) {
    const getSection = entry.target.closest("a").getAttribute("section");

    return document
      .querySelector(`#${getSection}`)
      .scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className={styles.header}>
      <h1>
        <a section="hero" onClick={scrollToSection}>
          <HeaderLogo />
        </a>
      </h1>

      <nav className={styles.nav}>
        <ul>
          <li>
            <a section="about" onClick={scrollToSection}>
              About
            </a>
          </li>
          <li>
            <a section="skills" onClick={scrollToSection}>
              Skills
            </a>
          </li>
          <li>
            <a section="works" onClick={scrollToSection}>
              Works
            </a>
          </li>
          <li>
            <a section="contact" onClick={scrollToSection}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
