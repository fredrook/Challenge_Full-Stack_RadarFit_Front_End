import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
    --color-white: #FFFFFF;
    --color-grey1: rgba(45, 63, 70);
    --color-grey2: rgba(34, 45, 53);
    --color-grey-fundo: rgba(230, 230, 230);
    --color-grey-fundo2: rgba( 241, 242, 240);
    --color-dark-text: #111111;
    --color-green-text: rgba(0, 142, 115);
    --color-grey-text: rgba( 168, 150, 170);


    --toastify-z-index: 99999;
    --toastify-color-success: var(--color-green3);
    --toastify-color-error: #501111;
    --toastify-text-color-sucess: #07bc0c;
    
    font-family: "Inter", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;      
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    scrollbar-gutter: stable;
    background-color: var(--color-grey-fundo);
    &::-webkit-scrollbar {
      width: 0.5rem;
      
    }
    &::-webkit-scrollbar-track {
      background: rgba(153, 168, 165, 0.3);
      border-radius: 0.3rem;
    }
    &::-webkit-scrollbar-thumb{
      background: var( --color-fontescura);
      border-radius: 0.3rem;
    }
  }

  #app__motion--page{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #app__motion--content {
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  #app__motion--modal{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10000;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  button {
    cursor: pointer;
    font-family: "Inter", sans-serif;
  }

  input:focus {
    border: 1px solid var(--color-green2);
  }
`;

export default GlobalStyle;