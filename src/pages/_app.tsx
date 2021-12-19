import { I18nProvider } from 'next-rosetta';
import { AppProps } from 'next/app';

import { GlobalProvider } from '@/stores/context/global-context';
import '@/styles/main.css';

function GlobalApp({ Component, pageProps }: AppProps) {
  return (
    <I18nProvider table={pageProps.table /* From getStaticProps */}>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </I18nProvider>
  );
}

export default GlobalApp;
