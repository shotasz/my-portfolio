import styled from "styled-components";
import { scrollToSection } from "../ui/utilities";

const StyleList = styled.li`
  font-size: 1.6rem;
  font-family: var(--font-ubuntu);
  text-transform: capitalize;
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
    content: "0${(props) => props.id - 1}.";
    display: inline-block;
    font-family: var(--font-roboto);
    font-weight: 300;
    color: var(--color-green);
    font-size: 3rem;
    margin-right: 0.7rem;
  }

  a {
    color: var(--color-white);
    font-size: 4rem;
    font-family: var(--font-ubuntu);
    font-weight: 700;
    letter-spacing: 1px;
    text-decoration: none;

    &:hover,
    &:focus {
      color: var(--color-green);
    }
  }
`;

export function NavigationList(props) {
  const count = props.id.slice(1);
  return (
    <StyleList id={count}>
      <a section={props.section} onClick={scrollToSection}>
        {props.section}
      </a>
    </StyleList>
  );
}
