import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container } from '../styles/pages/Home'
// import logo from '../assets/logo.png'
const Home: React.FC = () => {
  const [key, setKey] = useState('')
  const [text, setText] = useState('')
  const [resp, setResp] = useState('')
  const [defDict] = useState('qwe6rty0uiopa713sdfg84hjk2lçzx5c vb9nm')
  const [dict, setDict] = useState('qwe6rty0uiopa713sdfg84hjk2lçzx5c vb9nm')
  // Example: it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
  function genDict() {
    const positions = []
    // Percorre a chave
    for (let y = 0; y <= key.length; y++) {
      // para cada caractere da chave percorre o dicionario Padrão
      for (let x = 0; x <= defDict.length; x++) {
        // Encontra a posição dos caracteres da chave no dicionario Padrão
        if (key[y] === defDict[x]) {
          if (x !== 38) {
            positions.push(x)
          }
        }
      }
    }
    // console.log(positions)
    let parts, newDict
    const splitAt = index => x => [x.substring(0, index), x.substring(index)]
    // Se a chave for maio que 0 embaralhe o dicionario Padrão e gere o novo dicionario
    if (positions.length > 0) {
      for (let x = 1; x <= positions.length; x++) {
        // console.log(positions[x - 1])
        parts = splitAt(positions[x - 1])(defDict)
      }
      newDict = parts[1]
      newDict = reverseString(newDict)
      newDict = newDict.concat(parts[0])

      // console.log(parts + ' ' + 'newDict:' + newDict)
    }
    // console.log(newDict)
    setDict(newDict)
    return newDict
  }

  function encript() {
    let newText = ''
    const letterPositions = []
    for (let x = 0; x <= text.length - 1; x++) {
      letterPositions.push(defDict.indexOf(text[x]))
      newText = newText.concat(genDict()[defDict.indexOf(text[x])])
    }

    console.log(letterPositions)
    setResp(newText)
  }

  function decript() {
    let newText = ''
    const letterPositions = []
    for (let x = 0; x <= text.length - 1; x++) {
      letterPositions.push(genDict().indexOf(text[x]))
      newText = newText.concat(defDict[genDict().indexOf(text[x])])
    }
    console.log(letterPositions)
    setResp(newText)
  }

  function reverseString(str) {
    return str.split('').reverse().join('')
  }
  const setLoweCase = () => {
    setText(text.toLowerCase())
    return text.toLowerCase()
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(resp)
  }

  function getKey() {
    return event => {
      setKey(event.target.value)
    }
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
            <p className="subtext">Insira uma chave:</p>
            <input
              type="text"
              name="key"
              className="inputType1"
              placeholder="2d4d4fa6-2f4f1060-f63dda32-93d38a90"
              onChange={getKey()}
            />
          </label>
          <div className="dropdown">
            <button className="btn" disabled>
              <p>
                Menu <i className="arrow down"></i>
              </p>
            </button>
            <div className="dropdown-content">
              <a onClick={encript}>Encriptar</a>
              <a onClick={decript}>Decriptar</a>
            </div>
          </div>
          <br />
          <p className="subtext"> {dict} </p>
          <div className="secondForm">
            <div className="textInputSide">
              <p className="subtext">Insira um texto:</p>
              <textarea
                name="value"
                id=""
                className="inputType2"
                placeholder="Hello world!"
                cols={30}
                rows={10}
                onChange={getText()}
                onKeyUp={setLoweCase}
              ></textarea>
            </div>
            <div className="textInputSide">
              <p className="subtext">Resposta (Clique na area para copiar):</p>
              <textarea
                onClick={copyToClipboard}
                readOnly={true}
                name="value"
                id=""
                className="inputType2"
                placeholder="1$SDg3as=vaJ"
                cols={30}
                rows={10}
                value={resp}
              ></textarea>
            </div>
          </div>
        </form>
        <div className="footer">
          <Link href="https://github.com/Matheuswells/hider">
            <a target="_blank">
              <p>
                <p className="linkText subtext">
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
