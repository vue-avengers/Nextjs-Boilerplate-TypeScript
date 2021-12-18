import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '@/shared/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class CustomDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
