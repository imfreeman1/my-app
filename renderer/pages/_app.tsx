import React from "react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </Layout>
  );
}

export default MyApp;
