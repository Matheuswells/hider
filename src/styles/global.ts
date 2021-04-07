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
    font: 400 16px Anonymous Pro, sans-serif;
  }
   .btn {
    background-color:${props => props.theme.primary};
    color: ${props => props.theme.text};
    padding: 12px 35px;
    border: none;
    outline: 0;
    display: inline-block;
    cursor: pointer;
    border-radius: 2px;
    margin-left: 20px;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 1px;

  }

    .arrow {
    border: solid ${props => props.theme.text};;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    margin-bottom: 2px;
    margin-left: 5px;

  }

    .right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

    .left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }

    .up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }

    .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
`
