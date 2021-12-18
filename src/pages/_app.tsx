import { I18nProvider } from 'next-rosetta';
import { AppProps } from 'next/app';

import '@/styles/main.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <I18nProvider table={pageProps.table /* From getStaticProps */}>
      <Component {...pageProps} />
    </I18nProvider>
  );
}

export default CustomApp;
