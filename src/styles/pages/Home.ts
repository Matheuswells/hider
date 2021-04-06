import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 800px;
  min-height: 900px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 140px;
    margin-top: 40px;
    letter-spacing: 5px;
  }

  p {
    margin-top: 24px;
    margin-bottom: 5px;
    font-size: 18px;
    line-height: 32px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  .logoContainer {
    display: flex;
    width: 100vw;
    overflow: hidden;
    align-items: center;
    justify-content: center;
  }

  .imageLogoContainer {
    margin-top: 40px;
    float: left;
  }
  .form {
    display: flex;
    width: 100vw;
    overflow: hidden;
    align-items: center;
    justify-content: center;
  }
  .inputType1 {
    color: ${props => props.theme.text};
    background: ${props => props.theme.form};
    border: none;
    border-radius: 5px;
    padding: 12px 20px;
    width: 600px;
  }
  .inputType2 {
    color: ${props => props.theme.text};
    background: ${props => props.theme.form};
    border: none;
    border-radius: 5px;
    resize: none;
    padding: 12px 20px;
    width: 320px;
  }
  .inputType2:focus {
    border: none;
    outline-offset: 0px;
    outline: none;
  }
  .inputType1:focus {
    border: none;
    outline-offset: 0px;
    outline: none;
  }
  .textInputSide {
    float: left;
  }
  .secondForm {
    display: flex;
    width: 100%;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
  }
  .linkText {
    cursor: pointer;
  }
  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.text};
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .btn:hover,
  .dropdown:hover .btn {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.text};
  }
  .footer {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
  }
`
