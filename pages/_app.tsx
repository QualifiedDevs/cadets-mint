import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../src/theme";

import Header from "../src/Header";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <React.Fragment>
      <Head>
        <title>Cadets</title>
        <link href="/favicon.ico" rel="icon" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          socials={{
            discord: "https://discord.gg/VvdZcU6Nyq",
            twitter: "https://twitter.com/QualifiedDevs",
          }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}