import { extendTheme } from "@chakra-ui/react";

// アプリケーション全体に反映するグローバルなスタイルを適用する

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "gray.800"
      }
    }
  }
});

export default theme;
