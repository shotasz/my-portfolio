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

export const SpanSection = styled.span``;
