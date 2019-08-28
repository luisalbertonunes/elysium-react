import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body * { box-sizing: border-box; }

  body {
    font-family: 'Muli', sans-serif;
    margin:0;
    padding: 0;
    color: #535353 ;
    background-color: #F8F9FB;
  }
`;
