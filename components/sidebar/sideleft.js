import styles from "./sideleft.module.scss";

import IconTwitter from "../icons/twitter";
import IconGithub from "../icons/github";
import IconHome from "../icons/home";
import IconUser from "../icons/user";
import IconSettings from "../icons/settings";
import IconVision from "../icons/vision";
import IconEmail from "../icons/email";

import { scrollToSection } from "../ui/utilities";

export function SideLeft() {
  return (
    <div className={styles.navigation}>
      <ul className={styles.list}>
        <li>
          <a section="hero" onClick={scrollToSection}>
            <IconHome />
          </a>
        </li>
        <li>
          <a section="about" onClick={scrollToSection}>
            <IconUser />
          </a>
        </li>
        <li>
          <a section="skills" onClick={scrollToSection}>
            <IconSettings />
          </a>
        </li>
        <li>
          <a section="works" onClick={scrollToSection}>
            <IconVision />
          </a>
        </li>
        <li>
          <a section="contact" onClick={scrollToSection}>
            <IconEmail />
          </a>
        </li>
      </ul>

      <div className={styles.sns}>
        <a href="https://twitter.com/S2Shota123" target="_blank">
          <IconTwitter />
        </a>

        <a href="https://github.com/shotasz" target="_blank">
          <IconGithub />
        </a>
      </div>
    </div>
  );
}
