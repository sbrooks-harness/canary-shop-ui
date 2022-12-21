import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import type { AppProps } from "next/app";
import {
  FFContextProvider,
  useFeatureFlag,
  useFeatureFlags,
} from "@harnessio/ff-react-client-sdk";
import MainNav from "../components/layout/MainNav";
import Footer from "../components/layout/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const HARNESS_FF_KEY = "609ed598-8dff-4294-8faf-cc950bacd171";
  const reactTarget = { name: "Taco Test", identifier: "taco_test" };

  return (
    <FFContextProvider apiKey={HARNESS_FF_KEY} target={reactTarget}>
      <div className="content-wrapper">
        <MainNav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </FFContextProvider>
  );
}
