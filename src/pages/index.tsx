import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
// import logo from '../assets/logo.png'
const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Container>
        <div className="logoContainer">
          <div className="imageLogoContainer">
            {/* <img src={logo} alt="logo" width="165px" height="165px" /> */}
          </div>
          <h1>Hider</h1>
        </div>
        <form>
          <label>
            <p>Insira uma chave:</p>
            <input
              type="text"
              name="key"
              className="inputType1"
              placeholder="2d4d4fa6-2f4f1060-f63dda32-93d38a90"
            />
          </label>
          <input type="button" value="Encrypt" className="btn" />
          <br />
          <div className="secondForm">
            <div className="textInputSide">
              <p>Insira um texto:</p>
              <textarea
                name="value"
                id=""
                className="inputType2"
                placeholder="Hello world!"
                cols={30}
                rows={10}
              ></textarea>
            </div>
            <div className="textInputSide">
              <p>Resposta:</p>
              <textarea
                name="value"
                id=""
                className="inputType2"
                placeholder="1$SDg3as=vaJ"
                cols={30}
                rows={10}
              ></textarea>
            </div>
          </div>
        </form>
        <p>
          <p>&#127758; github.com/matheuswells</p>
        </p>
      </Container>
    </div>
  )
}

export default Home
