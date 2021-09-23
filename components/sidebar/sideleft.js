import styles from "./sideleft.module.scss";

import IconTwitter from "../icons/twitter";
import IconGithub from "../icons/github";
import HeaderLogo from "../icons/s-logo";

import { getNavIcons } from "../../skillsData";

export function SideLeft() {
  const icons = getNavIcons();

  return (
    <div className={styles.navigation}>
      <ul className={styles.list}>
        {icons.map((icon) => (
          <li key={icon.id}>
            <a href="#">{icon.icon}</a>
          </li>
        ))}
      </ul>

      <div className={styles.sns}>
        <a href="#">
          <IconTwitter />
        </a>

        <a href="#">
          <IconGithub />
        </a>
      </div>
    </div>
  );
}
