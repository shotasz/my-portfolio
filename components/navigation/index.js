import styles from "./index.module.scss";
import HeaderLogo from "../icons/s-logo";
import { NavigationList } from "./navigation-list";
import { scrollToSection } from "../ui/utilities";

export function Navigation(props) {
  const item = props.items;

  const listItem = item.slice(1);

  return (
    <header className={styles.header}>
      <h1>
        <a section="hero" onClick={scrollToSection}>
          <HeaderLogo />
        </a>
      </h1>

      <nav className={styles.nav}>
        <ul>
          {listItem &&
            listItem.map((list) => (
              <NavigationList
                key={list.section}
                id={list.id}
                section={list.section}
              />
            ))}
        </ul>
      </nav>
    </header>
  );
}
