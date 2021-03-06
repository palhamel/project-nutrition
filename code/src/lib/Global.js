import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Work Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #eac87b;
    background-image: linear-gradient(0deg, #eac87b 0%, #ffffff   100%);
    color: #193546;

    @media (max-width: 400px) {
    background-color: #c3d3e0;
    background-image: none;
  }
    
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
}
`;
