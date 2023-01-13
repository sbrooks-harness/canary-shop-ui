import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import type { AppProps } from "next/app";
import { FFContextProvider } from "@harnessio/ff-react-client-sdk";
import MainNav from "../components/layout/MainNav";
import Footer from "../components/layout/Footer";
import { CartListContextProvider } from "../contexts/cart-context";

export default function App({ Component, pageProps }: AppProps) {
  const HARNESS_FF_KEY = "fd529c5b-308e-4fa6-9a22-c5c451938e5e";
  const reactTarget = { name: "Taco Test", identifier: "ultimate_taco" };

  return (
    <FFContextProvider apiKey={HARNESS_FF_KEY} target={reactTarget}>
      <CartListContextProvider>
        <div className="content-wrapper">
          <MainNav />
          <Component {...pageProps} />
          <Footer />
        </div>
      </CartListContextProvider>
    </FFContextProvider>
  );
}
