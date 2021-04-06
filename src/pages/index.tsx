import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>
      <p>/index.tsx</p>
    </Container>
  )
}

export default Home
