import styles from "./sideleft.module.scss";

import { Link } from "react-scroll";
import IconTwitter from "../icons/twitter";
import IconGithub from "../icons/github";
import IconHome from "../icons/home";
import IconUser from "../icons/user";
import IconSettings from "../icons/settings";
import IconVision from "../icons/vision";
import IconEmail from "../icons/email";

export function SideLeft() {
  return (
    <div className={styles.navigation}>
      <ul className={styles.list}>
        <li>
          <Link
            activeClass={styles.active}
            to="hero"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <IconHome />
          </Link>
        </li>
        <li>
          <Link
            activeClass={styles.active}
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <IconUser />
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
          >
            <IconSettings />
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
          >
            <IconVision />
          </Link>
        </li>
        <li>
          <Link
            activeClass={styles.active}
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={400}
          >
            <IconEmail />
          </Link>
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
