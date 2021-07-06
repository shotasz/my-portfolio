import styles from "../styles/Sideleft.module.scss";
import Image from "next/image";
import IconHome from "./icons/home";
import IconUser from "./icons/user";
import IconSettings from "./icons/settings";
import IconVision from "./icons/vision";
import IconEmail from "./icons/email";
import IconTwitter from "./icons/twitter";
import IconGithub from "./icons/github";

export function Sideleft() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__logo}>
        <Image src="/s-logo.svg" alt="Icon Home" width={80} height={80} />
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

        <li>
          <a href="#">
            <IconTwitter />
          </a>
        </li>

        <li>
          <a href="#">
            <IconGithub />
          </a>
        </li>
      </ul>
    </nav>
  );
}
