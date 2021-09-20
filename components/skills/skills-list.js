import styles from "./skills-list.module.scss";
import { BoxContainer } from "../ui/ui";

function SkillsList(props) {
  const { skill, percent, icon, color } = props;

  return (
    <li>
      <figure className={styles.figure}>
        <div className={styles.icon}>{icon}</div>
        <span className={styles.title}>{skill}</span>
        <BoxContainer selectColor={color} selectPercent={percent} />
        <span className={styles.percent}>{percent}</span>
      </figure>
    </li>
  );
}

export default SkillsList;
