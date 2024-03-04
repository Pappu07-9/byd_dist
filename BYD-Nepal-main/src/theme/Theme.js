import { extendTheme } from "@chakra-ui/react";
import "@fontsource/archivo";
const theme = extendTheme({
  fonts: {
    heading: `'Archivo', sans-serif`,
    body: `'Archivo', sans-serif`,
    Text: `'Archivo', sans-serif`,
  },
  Text: {
    baseStyle: {
      color: "white",
    },
  },
});

export default theme;
