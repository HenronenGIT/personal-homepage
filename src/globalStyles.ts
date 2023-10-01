import { createGlobalStyle } from "styled-components";
// import { units } from '@client/shared/styles/units';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    //&::-webkit-scrollbar-track {
    //  background-color: transparent;
    //  border-radius: 4px;
    //  width: 20px;
    //}
  }
  * {
    box-sizing: border-box;

  }
  html {
    width: 100%;
    height: 100vh;
    background-color: black;
  }
  #root {
    display: flex;
    position: absolute;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  .scrollbar-animation {
    scrollbar-color: rgba(200,200,200, 0.2) rgba(0,0,0,0);
    scrollbar-width: thin;
    border-right-color: transparent;
    transition: all 0.3s;
    overflow-x: visible;
    /* margin-right: calc(${units.scrollBarMargin}); */
    &::-webkit-scrollbar-thumb {
      border-right-style: inset;
      /* sum viewport dimensions to guarantee border will fill scrollbar */
      border-right-width: calc(100vw + 100vh);
      /* inherit border-color to inherit transitions */
      border-right-color: inherit;
      border-radius: 10px;
      background-color: rgba(0,0,0,0);

    }
    &::-webkit-scrollbar {
      /* width: ${units.m1}; */
      background-color: rgba(0,0,0,0);
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 4px;
      width: 20px;
    }

    &:hover {
      transition: all 0.2s;
      border-right-color: rgba(200,200,200, 0.3);
    }
  }

@media (hover:none) {
.scrollbar-animation::-webkit-scrollbar-thumb {
  background-color: rgba(200,200,200, 0.3);
}
}
`;
