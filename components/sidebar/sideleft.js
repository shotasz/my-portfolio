import styles from "./sideleft.module.scss";

import IconTwitter from "../icons/twitter";
import IconGithub from "../icons/github";
import HeaderLogo from "../icons/s-logo";

import { getNavIcons } from "../../skillsData";

export function SideLeft() {
  const icons = getNavIcons();

  function scrollToSection(entry) {
    const getSection = entry.target.closest("a").getAttribute("section");

    return document
      .querySelector(`#${getSection}`)
      .scrollIntoView({ behavior: "smooth" });
  }

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
