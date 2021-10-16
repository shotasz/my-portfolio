export function scrollToSection(entry) {
  const getSection = entry.target.closest("a").getAttribute("section");

  return document
    .querySelector(`#${getSection}`)
    .scrollIntoView({ behavior: "smooth" });
}

export function stickyNavHandler() {
  const hero = document.querySelector("#hero");
  const nav = document.querySelector("header");
  const navHeight = nav.getBoundingClientRect().height;

  const stickyNav = (entries) => {
    const [entry] = entries;

    if (!entry.isIntersecting) nav.style.position = "fixed";
    else nav.style.position = "absolute";
  };

  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  });

  headerObserver.observe(hero);
}
