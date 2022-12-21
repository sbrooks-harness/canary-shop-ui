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
  const HARNESS_FF_KEY = "redacted";
  const reactTarget = { name: "ReactClientSDK", identifier: "reactclientsdk" };
  // const tacosEnabled = useFeatureFlag("CANARY_SHOP_TACO_MENU_ENABLED", false);

  return (
    <FFContextProvider async apiKey={HARNESS_FF_KEY} target={reactTarget}>
      <div className="content-wrapper">
        <MainNav tacosEnabled={false} />
        <Component {...pageProps} />
        <Footer />
      </div>
    </FFContextProvider>
  );
}
