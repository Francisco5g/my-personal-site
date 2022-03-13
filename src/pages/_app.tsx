import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "next-themes";
import { MobileNavMenuProvider } from "../context/MobileNavMenu";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <MobileNavMenuProvider>
        <Component {...pageProps} />
      </MobileNavMenuProvider>
    </ThemeProvider>
  );
}

export default MyApp;
