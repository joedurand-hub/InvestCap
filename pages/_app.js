import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="ZNQnPONDCrvj41rlCEslmsjMbIfMfotmEZ9l1sjU"
      serverUrl="https://yijnfjicccgq.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
