import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "../styles/global";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Head>
        <title>PokeCup</title>
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, Next.js and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
