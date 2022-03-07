import * as React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Router from "./routes/Router";

const GlobalStyle = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap');

  body {
    font-family: 'Comfortaa', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor}
  }
  a {
    text-decoration:none;
    color:inherit;
  }
  * {
    box-sizing: border-box;
  }
`;

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Router />
  </React.Fragment>
);

export default App;
