import styles from "../styles/Sideleft.module.scss";
import Image from "next/image";

export function Sideleft() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__logo}>
        <Image src="/s-logo.svg" alt="Icon Home" width={80} height={80} />
      </div>

      <ul className={styles.navigation__list}>
        <li>
          <a href="#">
            <Image src="/005-home.svg" alt="Icon Home" width={33} height={30} />
          </a>
        </li>

        <li>
          <a href="#">
            <Image src="/004-user.svg" alt="Icon Home" width={33} height={30} />
          </a>
        </li>

        <li>
          <a href="#">
            <Image
              src="/003-settings.svg"
              alt="Icon Home"
              width={33}
              height={30}
            />
          </a>
        </li>

        <li>
          <a href="#">
            <Image
              src="/006-vision.svg"
              alt="Icon Home"
              width={33}
              height={30}
            />
          </a>
        </li>

        <li>
          <a href="#">
            <Image
              src="/002-email.svg"
              alt="Icon Home"
              width={33}
              height={30}
            />
          </a>
        </li>
      </ul>

      <div>
        <span>
          <Image
            src="/007-twitter.svg"
            alt="Icon Home"
            width={33}
            height={30}
          />
        </span>
        <span>
          <Image src="/001-github.svg" alt="Icon Home" width={33} height={30} />
        </span>
      </div>
    </nav>
  );
}
