import IconHome from "./components/icons/home";
import IconUser from "./components/icons/user";
import IconSettings from "./components/icons/settings";
import IconVision from "./components/icons/vision";
import IconEmail from "./components/icons/email";

const MY_SKILLS = [
  {
    id: "1",
    skill: "HTML",
    description: "HTML画像",
    color: "#fc490b",
    percent: "90%",
    icon: "./icons/icon-html.svg",
  },
  {
    id: "2",
    skill: "CSS",
    description: "CSS画像",
    color: "#2196f3",
    percent: "70%",
    icon: "./icons/icon-css.svg",
  },
  {
    id: "3",
    skill: "SASS",
    description: "SASS画像",
    color: "#cd6699",
    percent: "70%",
    icon: "./icons/icon-sass.svg",
  },
  {
    id: "4",
    skill: "JAVASCRIPT",
    description: "JAVASCRIPT画像",
    color: "#e4ba42",
    percent: "70%",
    icon: "./icons/icon-javascript.svg",
  },
  {
    id: "5",
    skill: "REACT",
    description: "REACT画像",
    color: "#00acea",
    percent: "60%",
    icon: "./icons/icon-react.svg",
  },
  {
    id: "6",
    skill: "NPM",
    description: "NPM画像",
    color: "#cb3837",
    percent: "50%",
    icon: "./icons/icon-npm.svg",
  },
];

const NAV_ICONS = [
  {
    id: "i1",
    icon: <IconHome />,
    section: "hero",
  },
  {
    id: "i2",
    icon: <IconUser />,
    section: "about",
  },
  {
    id: "i3",
    icon: <IconSettings />,
    section: "skills",
  },
  {
    id: "i4",
    icon: <IconVision />,
    section: "works",
  },
  {
    id: "i5",
    icon: <IconEmail />,
    section: "contact",
  },
];

export function getMyData() {
  return MY_SKILLS;
}

export function getNavIcons() {
  return NAV_ICONS;
}
