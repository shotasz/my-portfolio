import styles from "./index.module.scss";
import SkillsList from "./skills-list";

export function Skills(props) {
  const { items } = props;

  return (
    <section className={styles.skills}>
      <span className={styles.skills__section_start}>&lt;section&gt;</span>
      <span className={styles.skills__h2_start}>&lt;h2&gt;</span>
      <h2>Skills & Experiences</h2>
      <span className={styles.skills__h2_end}>&lt;/h2&gt;</span>
      <span className={styles.skills__div_start}>&lt;div&gt;</span>
      <ul>
        {items.map((event) => (
          <SkillsList
            key={event.id}
            id={event.id}
            skill={event.skill}
            percent={event.percent}
            icon={event.icon}
          />
        ))}
      </ul>
      <span className={styles.skills__div_end}>&lt;/div&gt;</span>
      <span className={styles.skills__section_end}>&lt;/section&gt;</span>
    </section>
  );
}
