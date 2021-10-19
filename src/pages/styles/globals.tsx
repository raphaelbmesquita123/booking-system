import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%; //15px
    }
    
    @media (max-width: 720px){
      font-size: 87.5%; //14px
    }
  }
  
  body, input, button{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
  }
  
  body{
    background-color: var(--gray);
  }

  h1, h2, h3, h4, h5, h6, strong, small{
    font-weight: 400;
  }

  button{
    cursor: pointer;
    border: none;
    border-radius: 0.5rem;
    &:active {
      transform: scale(0.99);
    }
    &:hover {
      filter: brightness(0.9);
    }
  }

  ul{
    list-style-type: none;
  }

  a{
    text-decoration: none;
  }
  :root{
    --blue-900: #22314D;
    --blue-500: #56698F;
    --blue-100: #29BAD6;
    --blue-50: #00D5FF;
    --orange: orange;
    --green: #009846;
    --red: #E31E24;
    --white: #ffffff;
    --gray: #F3F3F3;
    --gray-200: #dadada;
    --gray-500: #999999;
    --cream: #F3EFE4;
    --gray-texas: #374043;
  }

`
