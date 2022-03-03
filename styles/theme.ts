import { extendTheme, theme, type ThemeConfig, type ComponentStyleConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false,
}

const colors = {
  primary: theme.colors.purple,
}

const Button: ComponentStyleConfig = {
  baseStyle: ({ colorMode }) => ({
    _focus: {
      boxShadow:
        colorMode === 'light'
          ? `0 0 0 3px ${colors.primary[700]}`
          : `0 0 0 3px ${colors.primary[300]}`,
    },
  }),
  variants: {
    solid: ({ colorMode }) => ({
      background: colorMode === 'light' ? `${colors.primary[600]}` : `${colors.primary[700]}`,
      color: colorMode === 'light' ? 'white' : 'white',
      paddingBlock: '.5em',
      paddingInline: '1em',
      _hover: {
        background: colorMode === 'light' ? `${colors.primary[700]}` : `${colors.primary[600]}`,
      },
    }),
    outline: ({ colorMode }) => ({
      color: colorMode === 'light' ? `${colors.primary[600]}` : `${colors.primary[300]}`,
      paddingBlock: '.5em',
      paddingInline: '1em',
      _hover: {
        color: colorMode === 'light' ? `${colors.primary[700]}` : `${colors.primary[100]}`,
      },
    }),
    ghost: ({ colorMode }) => ({
      color: colorMode === 'light' ? `${colors.primary[600]}` : `${colors.primary[500]}`,
      _hover: {
        background: colorMode === 'light' ? `${colors.primary[50]}` : `${colors.primary[900]}`,
      },
    }),
  },
}

const Input: ComponentStyleConfig = {
  baseStyle: ({}) => ({}),
  variants: {
    outline: ({ colorMode }) => ({
      field: {
        color: colorMode === 'light' ? 'gray.800' : 'gray.100',
        _placeholder: {
          color: colorMode === 'light' ? 'gray.300' : 'gray.300',
        },
      },
    }),
  },
}

export default extendTheme({
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        background: props.colorMode === 'light' ? 'white' : 'gray.800',
      },
    }),
  },
  colors,
  fonts: {
    body: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol"`,
    heading: `Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
  fontSizes: {
    xs: 'clamp(0.69rem, calc(0.59rem + 0.25vw), 0.79rem)',
    sm: 'clamp(0.80rem, calc(0.74rem + 0.31vw), 0.96rem)',
    md: 'clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem)',
    lg: 'clamp(1.25rem, calc(1.15rem + 0.49vw), 1.50rem)',
    xl: 'clamp(1.56rem, calc(1.44rem + 0.61vw), 1.88rem)',
    '2xl': 'clamp(1.95rem, calc(1.80rem + 0.76vw), 2.34rem)',
    '3xl': 'clamp(2.44rem, calc(2.25rem + 0.95vw), 2.93rem)',
    '4xl': 'clamp(3.05rem, calc(2.81rem + 1.19vw), 3.66rem)',
    '5xl': 'clamp(3.82rem, calc(3.52rem + 1.49vw), 4.58rem)',
    '6xl': 'clamp(4.77rem, calc(4.40rem + 1.86vw), 5.72rem)',
    '7xl': ' clamp(7.15rem, calc(5.50rem + 2.33vw), 5.96rem)',
    '8xl': 'clamp(7.45rem, calc(6.87rem + 2.91vw), 8.94rem)',
    '9xl': 'clamp(9.31rem, calc(8.59rem + 3.63vw), 11.18rem)',
  },
  config,
  components: {
    Button,
    Input,
  },
})
