import styled from "styled-components";
import { scrollToSection } from "../ui/utilities";

const StyleList = styled.li`
  margin-right: min(4vw, 24px);
  font-size: 1.6rem;
  font-family: var(--font-ubuntu);
  text-transform: capitalize;

  &::before {
    content: "0${(props) => props.id - 1}.";
    display: inline-block;
    font-family: var(--font-ubuntu);
    font-weight: 300;
    color: var(--color-green);
    font-size: 1.5rem;
    margin-right: 0.7rem;
  }

  a {
    color: var(--color-light-slate) !important;

    &:hover,
    &:focus {
      color: var(--color-green) !important;
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
