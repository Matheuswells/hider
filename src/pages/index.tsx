import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container } from '../styles/pages/Home'
// import logo from '../assets/logo.png'
const Home: React.FC = () => {
  const [key, setKey] = useState('')
  const [text, setText] = useState('')
  const [resp, setResp] = useState('')
  const [defDict, setDefDict] = useState(
    'qwe6rty0uiopa713sdfg84hjk2lçzx5c vb9nm'
  )
  const [dict, setDict] = useState('qwe6rty0uiopa713sdfg84hjk2lçzx5c vb9nm')

  function genDict() {
    const positions = []
    for (let y = 0; y <= key.length; y++) {
      for (let x = 0; x <= defDict.length; x++) {
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

    if (positions.length > 0) {
      for (let x = 1; x <= positions.length; x++) {
        // console.log(positions[x - 1])
        parts = splitAt(positions[x - 1])(defDict)
      }
      newDict = parts[1]
      newDict = newDict.concat(parts[0])

      // console.log(parts + ' ' + 'newDict:' + newDict)
    }
    // console.log(newDict)
    setDict(newDict)
    encript()
  }

  function encript() {
    let newText = ''
    const letterPositions = []
    for (let x = 0; x <= text.length - 1; x++) {
      letterPositions.push(defDict.indexOf(text[x]))
      newText = newText.concat(dict[defDict.indexOf(text[x])])
    }

    console.log(letterPositions)
    setResp(newText)
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
            <button className="btn">
              <p>
                Menu <i className="arrow down"></i>
              </p>
            </button>
            <div className="dropdown-content">
              <a onClick={genDict}>Encriptar</a>
              <a href="#">Encriptar com chave aleatoria</a>
              <a href="#">Decriptar</a>
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
              ></textarea>
            </div>
            <div className="textInputSide">
              <p className="subtext">Resposta:</p>
              <textarea
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
