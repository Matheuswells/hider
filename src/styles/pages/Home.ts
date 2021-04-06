import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 800px;
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
    padding: 12px 20px;
    width: 600px;
  }
  .inputType2 {
    padding: 12px 20px;
    width: 320px;
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
`
