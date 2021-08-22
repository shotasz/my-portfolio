import styles from "./sideleft.module.scss";

import IconHome from "./icons/home";
import IconUser from "./icons/user";
import IconSettings from "./icons/settings";
import IconVision from "./icons/vision";
import IconEmail from "./icons/email";
import IconTwitter from "./icons/twitter";
import IconGithub from "./icons/github";
import HeaderLogo from "./icons/s-logo";

export function Sideleft() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__logo}>
        <HeaderLogo />
      </div>

      <ul className={styles.navigation__list}>
        <li>
          <a href="#">
            <IconHome />
          </a>
        </li>

        <li>
          <a href="#">
            <IconUser />
          </a>
        </li>

        <li>
          <a href="#">
            <IconSettings />
          </a>
        </li>

        <li>
          <a href="#">
            <IconVision />
          </a>
        </li>

        <li>
          <a href="#">
            <IconEmail />
          </a>
        </li>
      </ul>

      <div className={styles.navigation__sns}>
        <a href="#">
          <IconTwitter />
        </a>

        <a href="#">
          <IconGithub />
        </a>
      </div>
    </nav>
  );
}
