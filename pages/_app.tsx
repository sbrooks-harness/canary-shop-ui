import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import type { AppProps } from "next/app";
import { FFContextProvider } from "@harnessio/ff-react-client-sdk";
import MainNav from "../components/layout/MainNav";
import Footer from "../components/layout/Footer";
import { CartListContext, Product } from "../type";
import { createContext, useState } from "react";
import CartListContextProvider from "../contexts/cart-context";

const App = ({ Component, pageProps }: AppProps) => {
  const HARNESS_FF_KEY = "f97d986f-184c-4c27-9ebc-89deb397b404";
  const harnessFFTarget = {
    name: "sean-local",
    identifier: "sean.brooks@harness.io",
  };

  // const [cartItems, setCartItems] = useState<Product[]>([]);

  return (
    <FFContextProvider apiKey={HARNESS_FF_KEY} target={harnessFFTarget}>
      <CartListContextProvider>
        <MainNav />
        <Component {...pageProps} />
        <Footer />
      </CartListContextProvider>
    </FFContextProvider>
  );
};

export default App;
