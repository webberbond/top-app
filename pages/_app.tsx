import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Head from 'next/head';
import ym from 'react-yandex-metrika';
import { YMInitializer } from 'react-yandex-metrika';

export default function App({ Component, router, pageProps }: AppProps) {
  router.events.on('routeChangeComplete', (url: string) => {
    if (typeof window == 'undefined') {
      ym('hit', url);
    }
  });

  return (
    <>
      <Head>
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
        />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="article" />
      </Head>
      <YMInitializer
        accounts={[89968021]}
        options={{ webvisor: true, defer: true }}
        version="2"
      />
      <Component {...pageProps} />;
    </>
  );
}
