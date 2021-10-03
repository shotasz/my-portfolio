import IconHtml from "./components/icons-skill/icon-html";
import IconCss from "./components/icons-skill/icon-css";
import IconSass from "./components/icons-skill/icon-sass";
import IconJavascript from "./components/icons-skill/icon-javascript";
import IconReact from "./components/icons-skill/icon-react";
import IconNpm from "./components/icons-skill/icon-npm";

import IconHome from "./components/icons/home";
import IconUser from "./components/icons/user";
import IconSettings from "./components/icons/settings";
import IconVision from "./components/icons/vision";
import IconEmail from "./components/icons/email";

const MY_SKILLS = [
  {
    id: "1",
    skill: "HTML",
    color: "#fc490b",
    percent: "90%",
    icon: <IconHtml />,
  },
  {
    id: "2",
    skill: "CSS",
    color: "#2196f3",
    percent: "70%",
    icon: <IconCss />,
  },
  {
    id: "3",
    skill: "SASS",
    color: "#cd6699",
    percent: "70%",
    icon: <IconSass />,
  },
  {
    id: "4",
    skill: "JAVASCRIPT",
    color: "#e4ba42",
    percent: "70%",
    icon: <IconJavascript />,
  },
  {
    id: "5",
    skill: "REACT",
    color: "#00acea",
    percent: "60%",
    icon: <IconReact />,
  },
  {
    id: "6",
    skill: "NPM",
    color: "#cb3837",
    percent: "50%",
    icon: <IconNpm />,
  },
];

const NAV_ICONS = [
  {
    id: "i1",
    icon: <IconHome />,
    section: "#header",
  },
  {
    id: "i2",
    icon: <IconUser />,
    section: "#about",
  },
  {
    id: "i3",
    icon: <IconSettings />,
    section: "#skills",
  },
  {
    id: "i4",
    icon: <IconVision />,
    section: "#works",
  },
  {
    id: "i5",
    icon: <IconEmail />,
    section: "#contact",
  },
];

export function getMyData() {
  return MY_SKILLS;
}

export function getNavIcons() {
  return NAV_ICONS;
}
