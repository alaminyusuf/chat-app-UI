import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html, *{
  margin: 0;
  padding: 0;
  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f4f4f4;
    overflow: hidden;
    a {
      text-decoration: none;
    }
    .container {
      width: 90%;
      margin: auto;
      overflow: hidden;
      height: 100%;
    }
    .wrapper {
      position: relative;
      display: inline-block;
    };

    .wrapper:after{
      content: "";
      background: -webkit-rgba(0,0,0,0.6);
      background: rgba(0,0,0,0.6);
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      bottom: 0;
    };
  }
}
`
