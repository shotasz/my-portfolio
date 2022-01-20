const MY_SKILLS = {
  id: "e1",
  skills: [
    {
      id: "m1",
      skill: "HTML",
      description: "HTML画像",
      color: "#fc490b",
      percent: "90%",
      icon: "./icons/icon-html.svg",
    },
    {
      id: "m2",
      skill: "CSS",
      description: "CSS画像",
      color: "#2196f3",
      percent: "70%",
      icon: "./icons/icon-css.svg",
    },
    {
      id: "m3",
      skill: "SASS",
      description: "SASS画像",
      color: "#cd6699",
      percent: "70%",
      icon: "./icons/icon-sass.svg",
    },
    {
      id: "m4",
      skill: "JAVASCRIPT",
      description: "JAVASCRIPT画像",
      color: "#e4ba42",
      percent: "70%",
      icon: "./icons/icon-javascript.svg",
    },
    {
      id: "m5",
      skill: "REACT",
      description: "REACT画像",
      color: "#00acea",
      percent: "60%",
      icon: "./icons/icon-react.svg",
    },
    {
      id: "m6",
      skill: "NPM",
      description: "NPM画像",
      color: "#cb3837",
      percent: "50%",
      icon: "./icons/icon-npm.svg",
    },
  ],
  sections: [
    {
      id: "i1",
      section: "hero",
    },
    {
      id: "i2",
      section: "about",
    },
    {
      id: "i3",
      section: "skills",
    },
    {
      id: "i4",
      section: "works",
    },
    {
      id: "i5",
      section: "contact",
    },
  ],
};

export function getMyData() {
  return MY_SKILLS;
}
