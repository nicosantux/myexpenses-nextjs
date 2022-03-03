import type { AppProps } from 'next/app'

import { ChakraProvider, Container, Center, Text } from '@chakra-ui/react'

import theme from '../styles/theme'
import '../styles/fonts.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container
        display="grid"
        gridTemplateColumns="1fr"
        gridTemplateRows="auto 1fr auto"
        maxW="container.xl"
        minHeight="100vh"
        p={0}
      >
        <Component {...pageProps} />
        <Center paddingBlock={2}>
          <Text fontSize="xs">Designed with ♥ by NicoSantux</Text>
        </Center>
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
