export function revealSectionHandler() {
  const allSections = document.querySelectorAll("section");

  const revealSection = (entries, observer) => {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    if (entry.target.id === "hero") return;

    // entry.target.style.transform = "translateY(50px)";
    //fadeUpAnimeグローバルに設定
    entry.target.style.opacity = "1";
    entry.target.style.animation = "fadeUpAnime 0.75s ease-out";

    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });

  allSections.forEach((section) => {
    sectionObserver.observe(section);
    if (section.id === "hero") return;
    section.style.opacity = "0";
    // section.style.transform = "translateY(0)";
  });
}
