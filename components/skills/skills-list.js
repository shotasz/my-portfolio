import styles from "./skills-list.module.scss";
import { BoxContainer } from "../ui/ui";

function SkillsList(props) {
  const { skill, percent, icon, color, description } = props;

  return (
    <li>
      <figure className={styles.figure}>
        <div className={styles.icon}>
          <img alt={description} src={icon} />
        </div>
        <p className={styles.title}>{skill}</p>
        <BoxContainer selectColor={color} selectPercent={percent} />
        <p className={styles.percent}>{percent}</p>
      </figure>
    </li>
  );
}

export default SkillsList;
