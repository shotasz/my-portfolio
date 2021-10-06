import styles from "./sideleft.module.scss";

import IconTwitter from "../icons/twitter";
import IconGithub from "../icons/github";

import { getNavIcons } from "../../skillsData";
import { scrollToSection } from "../ui/utilities";

export function SideLeft() {
  const icons = getNavIcons();

  return (
    <div className={styles.navigation}>
      <ul className={styles.list}>
        {icons &&
          icons.map((icon) => (
            <li key={icon.id}>
              <a section={icon.section} onClick={scrollToSection}>
                {icon.icon}
              </a>
            </li>
          ))}
      </ul>

      <div className={styles.sns}>
        <a href="https://twitter.com/S2Shota123">
          <IconTwitter />
        </a>

        <a href="https://github.com/shotasz">
          <IconGithub />
        </a>
      </div>
    </div>
  );
}
