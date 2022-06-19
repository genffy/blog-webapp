
import App from "next/app";
import Head from "next/head";

import '@/styles/globals.css';
import '@/styles/nord.css';

import { createContext } from "react";
import { fetchAPI } from "@/utils/api";
import { getStrapiMedia } from "@/utils/media";
import { GlobalStyles } from '@/styles/global'
import { ThemeProvider } from '@emotion/react'
import { themeLight, themeDark } from '@/styles/theme'
import { useThemeContext } from '@/utils/useThemeContext'

import type { AppContext, AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const { global } = pageProps;
  const { theme } = useThemeContext()
  const themeMode = theme === 'light' ? themeLight : themeDark
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <GlobalStyles />
        <ThemeProvider theme={themeMode}>
          <Component {...pageProps} />
        </ThemeProvider>
        {/* <Component {...pageProps} /> */}
      </GlobalContext.Provider>
    </>
  );
}

// Store Strapi Global object in context
export const GlobalContext = createContext({});

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx: AppContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
      avatar: '*',
    },
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;