import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Nunito', sans-serif;
    padding:0;
    margin:0;
    background-color: #ffffff;
    min-width: 100vw;
    overflow-x: hidden;
    
    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: inherit;
    }

    &::-webkit-scrollbar-thumb {
      background: linear-gradient(67.56deg, #960000 27.72%, #ff0000 88.7%);
      height: 80px;
      border-radius: 50px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
