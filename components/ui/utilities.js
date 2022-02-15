export function scrollToSection(entry) {
  const getSection = entry.target.closest("a").getAttribute("section");
  const nav = document.querySelector("header");

  const log = document
    .querySelector(`#${getSection}`)
    .scrollIntoView({ behavior: "smooth" });

  return log;
}

export function stickyNavHandler() {
  const hero = document.querySelector("#hero");
  const nav = document.querySelector("header");
  const navHeight = nav.getBoundingClientRect().height;

  const stickyNav = (entries) => {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      nav.style.position = "fixed";
    } else {
      nav.style.position = "absolute";
    }
  };

  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  });

  headerObserver.observe(hero);
}

///////////////////////////////////////////////////////////////

export function revealSectionHandler() {
  const allSections = document.querySelectorAll("section");

  const revealSection = (entries, observer) => {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    if (entry.target.id === "hero") return;

    entry.target.style.opacity = "1";
    //fadeUpAnimeグローバルに設定
    entry.target.style.animation = "fadeUpAnime 0.75s ease-out 0s";

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
  });
}
