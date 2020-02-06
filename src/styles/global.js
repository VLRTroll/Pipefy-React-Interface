import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  } 

  body {
    font: 14px 'Roboto', sans-serif; /* configura a fonte padrão*/
    background: #ecf1f8;  /* define a cor de fundo do site */
    color: #333; /* define a cor da fonte */
    -webkit-font-smoothing: antialised !important; /* suaviza a renderização da fonte */
  }

  ul {
    list-style: none; /* remove o marcador de item de lista */
  }
`;
