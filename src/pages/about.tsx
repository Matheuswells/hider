import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
      <p>/about.tsx</p>
    </Container>
  )
}

export default Home
