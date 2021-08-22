import styles from "./skills-list.module.scss";

function SkillsList(props) {
  const { id, skill, percent, icon, color } = props;

  return (
    <li>
      <figure className={styles.figure}>
        <div className={styles.icon}>{icon}</div>
        <span className={styles.title}>{skill}</span>
        <div className={styles.square}></div>
        <span className={styles.percent}>{percent}</span>
      </figure>
    </li>
  );
}

export default SkillsList;
