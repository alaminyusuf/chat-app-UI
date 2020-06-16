import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, *{
    margin: 0;
    padding: 0;
    body{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background-color: #f4f4f4;
      a {
        text-decoration: none;
      }
      .container {
        width: 85%;
        margin: auto;
        overflow: hidden;
      }
      .simple-triangle {
        clip-path: polygon(0 0, 0% 100%, 100% 100%);
      }
      .triangle {
        clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
      }
      .pentagon {
        clip-path: polygon(100% 1%, 100% 0, 58% 100%, 0 100%, 0 0);
      }
      .message {
        clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
      }
        .heptagon {
        height: 75vh;
          clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);

        }
      .star{
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
      }
    }
  }
`
