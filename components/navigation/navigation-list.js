import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import { scrollToSection } from "../ui/utilities";

const StyleList = styled.li`
  text-transform: uppercase;
  padding: 1rem 2rem;

  &:link,
  &:visited {
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    padding: 1rem 2rem;
    color: var(--color-white);
  }

  &::before {
    content: "0${(props) => props.count - 1}.";
    display: inline-block;
    font-family: var(--font-roboto);
    font-weight: 300;
    color: var(--color-green);
    font-size: ${(props) => props.bfFontsize};
    margin-right: 0.7rem;
  }

  a {
    color: var(--color-white);
    font-size: ${(props) => props.fontsize};
    font-family: var(--font-ubuntu);
    font-weight: 700;
    text-decoration: none;

    &:hover,
    &:focus {
      color: var(--color-green);
    }
  }
`;

export function NavigationList(props) {
  const { count, section, fontsize, bfFontsize, isOpen, setIsOpen, mobile } =
    props;

  return (
    <StyleList
      count={count}
      fontsize={fontsize ? "2rem" : "3.5rem"}
      bfFontsize={bfFontsize ? "1.6rem" : "2.5rem"}
    >
      <a
        href={mobile ? `#${section}` : null}
        onClick={mobile ? () => setIsOpen(!isOpen) : scrollToSection}
        section={section}
      >
        {section}
      </a>
    </StyleList>
  );
}
