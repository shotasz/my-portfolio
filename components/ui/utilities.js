export function scrollToSection(entry) {
  const getSection = entry.target.closest("a").getAttribute("section");

  return document
    .querySelector(`#${getSection}`)
    .scrollIntoView({ behavior: "smooth" });
}
