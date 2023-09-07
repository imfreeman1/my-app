import React from "react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
