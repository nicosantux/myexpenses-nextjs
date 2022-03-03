import type { NextPage } from 'next'

import { Box } from '@chakra-ui/react'
import Head from 'next/head'

import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MyExpenses | Home</title>
      </Head>

      <NavBar />
      <Box />
    </>
  )
}

export default Home
