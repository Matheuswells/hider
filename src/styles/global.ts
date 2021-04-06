import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    font: 400 16px Roboto, sans-serif;
  }
   .btn {
    background-color:${props => props.theme.primary};
    color: ${props => props.theme.background};
    padding: 12px 20px;
    border: none;
    outline: 0;
    display: inline-block;
    cursor: pointer;
    border-radius: 2px;
  }

`
