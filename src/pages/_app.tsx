import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import { I18nProvider } from 'next-rosetta';
import { AppProps } from 'next/app';

import '@/styles/main.css';
import { DefaultLayout } from '@/layout/default-layout';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function GlobalApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ||
    ((page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <I18nProvider table={pageProps.table /* From getStaticProps */}>
      {getLayout(<Component {...pageProps} />)}
    </I18nProvider>
  );
}

export default GlobalApp;
