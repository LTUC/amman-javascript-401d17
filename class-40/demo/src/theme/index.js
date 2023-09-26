import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export default extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true
  },
  colors: {
    brand: {
      50: '#EBD4E2',
      100: '#E4C6D8',
      200: '#D7AAC5',
      300: '#CA8FB3',
      400: '#BD73A0',
      500: '#B0578D',
      600: '#8D426F',
      700: '#673051',
      800: '#401E33',
      900: '#1A0C15',
      950: '#070306'
    },
  },
  fonts: {
    heading: '',
    body: '',
    hasan: ''
  }
})