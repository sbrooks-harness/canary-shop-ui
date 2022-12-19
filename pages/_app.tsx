import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import type { AppProps } from "next/app";
import MainNav from "../components/layout/MainNav";
import Footer from "../components/layout/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="content-wrapper">
      <MainNav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
