import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

import theme from '../styles/theme'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/nunito-regular.woff2"
            rel="preload"
            type="font/woff2"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/nunito-semibold.woff2"
            rel="preload"
            type="font/woff2"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/nunito-extrabold.woff2"
            rel="preload"
            type="font/woff2"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/inter-regular.woff2"
            rel="preload"
            type="font/woff2"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/inter-semibold.woff2"
            rel="preload"
            type="font/woff2"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/fonts/inter-extrabold.woff2"
            rel="preload"
            type="font/woff2"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
