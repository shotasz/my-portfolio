import styled from "styled-components";

export const BoxContainer = styled.div`
  height: 3.7rem;
  width: 18rem;
  margin-top: -2rem;
  background-color: var(--color-slate);
  border-radius: 3px;
  justify-self: center;

  ::before {
    content: "";
    display: block;
    height: 100%;
    width: ${(props) => props.selectPercent};
    background-image: linear-gradient(
      105deg,
      ${(props) => props.selectColor} 0%,
      ${(props) => props.selectColor} 50%
    );
    background-size: 100%;
    border-radius: 3px 0 0 3px;
  }
`;

export const StyleButton = styled.label`
  background-color: var(--color-green);
  height: 5rem;
  width: 5rem;
  position: fixed;
  top: 2rem;
  right: 2rem;
  border-radius: 50%;
  z-index: 2000;
  text-align: center;
  cursor: pointer;
`;

export const StyleIcon = styled.span`
  position: relative;
  margin-top: 2.3rem;

  &,
  &::before,
  &::after {
    width: 3rem;
    height: 2px;
    background-color: var(--color-lightest-navy);
    display: inline-block;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    top: -0.8rem;
  }
  &::after {
    top: 0.8rem;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
  &::before {
    top: 0;
    transform: rotate(-135deg);
  }
  &::after {
    top: 0;
    transform: rotate(135deg);
  }
  & {
    background-color: transparent;
  }
`}
`;
