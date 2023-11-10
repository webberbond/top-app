import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, router, pageProps }: AppProps) {
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
      <Component {...pageProps} />;
    </>
  );
}
