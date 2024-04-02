import "@/styles/globals.css";

import React from "react";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import theme from "@/theme/themeConfig";
import { CartProvider } from "@/context/CartContext";

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={theme}>
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  </ConfigProvider>
);

export default App;
