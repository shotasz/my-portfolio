import ReactDOM from "react-dom";
import styled from "styled-components";

export function NavigationBar() {
  const NavigationStyle = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    position: fixed;
    z-index: 100;
    background-color: var(--color-green);
  `;

  return ReactDOM.createPortal(
    <NavigationStyle>
      <h1>
        <a href="/">Navigation</a>
      </h1>
      <nav>
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </nav>
    </NavigationStyle>,
    document.getElementById("navigation")
  );
}
