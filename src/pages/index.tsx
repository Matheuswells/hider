import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container } from '../styles/pages/Home'
import { generateKeyPair } from 'node:crypto'
// import logo from '../assets/logo.png'
const Home: React.FC = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  function getKey() {
    return event => setTitle(event.target.value)
  }
  function getText() {
    return event => setText(event.target.value)
  }
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Container>
        <div className="logoContainer">
          <div className="imageLogoContainer">
            {/* <img src={logo} alt="logo" width="165px" height="165px" /> */}
          </div>
          <h1 className="title">Hider</h1>
        </div>
        <form>
          <label>
            <p>Insira uma chave:</p>
            <input
              type="text"
              name="key"
              className="inputType1"
              placeholder="2d4d4fa6-2f4f1060-f63dda32-93d38a90"
              onChange={getKey()}
            />
          </label>
          <div className="dropdown">
            <input type="button" value="Ação" className="btn" />
            <div className="dropdown-content">
              <a href="#">Encriptar</a>
              <a href="#">Encriptar com chave aleatoria</a>
              <a href="#">Decriptar</a>
            </div>
          </div>
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
                onChange={getText()}
              ></textarea>
            </div>
            <div className="textInputSide">
              <p>Resposta:</p>
              <textarea
                readOnly={true}
                name="value"
                id=""
                className="inputType2"
                placeholder="1$SDg3as=vaJ"
                cols={30}
                rows={10}
                value={text.replaceAll('.', '*')}
              ></textarea>
            </div>
          </div>
        </form>
        <div className="footer">
          <Link href="https://github.com/Matheuswells/hider">
            <a target="_blank">
              <p>
                <p className="linkText">
                  &#127758; github.com/matheuswells | &#128293; Hosted by vercel
                </p>
              </p>
            </a>
          </Link>
        </div>
      </Container>
    </>
  )
}

export default Home
