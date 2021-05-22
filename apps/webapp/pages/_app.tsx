import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import './tailwind.css';
import {Header, Footer} from '@fitness-tracking/ui'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to webapp!</title>
      </Head>
      <div className="app">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default CustomApp;
