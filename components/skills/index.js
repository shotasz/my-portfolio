import styles from "./index.module.scss";
import SkillsList from "./skills-list";

export function Skills({ items }) {
  const data = items;
  return (
    <section className={styles.skills} id="skills">
      <span className={styles.skills__section_start}>&lt;section&gt;</span>
      <span className={styles.skills__h2_start}>&lt;h2&gt;</span>
      <h2>Language Learned</h2>
      <span className={styles.skills__h2_end}>&lt;/h2&gt;</span>
      <span className={styles.skills__div_start}>&lt;div&gt;</span>
      <ul>
        {data &&
          data.map((item) => (
            <SkillsList
              key={item.id}
              skill={item.skill}
              percent={item.percent}
              icon={item.icon}
              color={item.color}
              description={item.description}
            />
          ))}
      </ul>
      <span className={styles.skills__div_end}>&lt;/div&gt;</span>
      <span className={styles.skills__section_end}>&lt;/section&gt;</span>
    </section>
  );
}
