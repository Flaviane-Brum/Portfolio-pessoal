import Header from "../components/Header";
import { GlobalProvider } from "../GlobalContext";
import "../styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextNprogress from "nextjs-progressbar";
function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <NextNprogress
        color={`var(--pink-3)`}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Header />
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
