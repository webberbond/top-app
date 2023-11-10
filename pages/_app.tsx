import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';
import ym from 'react-yandex-metrika';
import { YMInitializer } from 'react-yandex-metrika';

function MyApp({ Component, pageProps, router }: AppProps) {
  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      ym('hit', url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>{/* ... */}</Head>
      <YMInitializer
        accounts={[]}
        options={{ webvisor: true, defer: true }}
        version="2"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
