import { createGlobalStyle } from 'styled-components'
import { ThemeType } from '.'
export default createGlobalStyle<ThemeType>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font: 400 16px Roboto, sans-serif;
  }
   .btn {
    background-color:${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
    padding: 12px 20px;
    border: none;
    outline: 0;
    display: inline-block;
    cursor: pointer;
    border-radius: 2px;
  }

`
