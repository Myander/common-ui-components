import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  };
  html {
    box-sizing: border-box;
    font-size: 62.5%; /* 1 rem = 10px*/
    @media screen and (max-width: 1200px) {
      font-size: 56.25%;
    }
    @media screen and (max-width: 900px) {
      font-size: 50%;
    }
  };

  body {
    color: ${props => props.theme.colors.main};
    background-color: ${props => props.theme.colors.backgroundMain};
    font-family: sans-serif; 
    font-weight: 400;
    line-height: 1.6;
  }

  ul {
      list-style-type: none;
    }
`;
