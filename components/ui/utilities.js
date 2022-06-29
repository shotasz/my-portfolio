import styles from "./utilities.module.scss";

export function revealSectionHandler() {
  const allSections = document.querySelectorAll("section");

  const revealSection = (entries, observer) => {
    const [entry] = entries;

    if (entry.target.id === "hero") return;

    if (!entry.isIntersecting) return;

    if (entry.isIntersecting) {
      entry.target.classList.remove(`${styles.disactive}`);
      entry.target.classList.add(`${styles.active}`);
    }

    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.2,
  });

  allSections.forEach((section) => {
    sectionObserver.observe(section);
    if (section.id === "hero") return;

    section.classList.add(`${styles.disactive}`);
  });
}
