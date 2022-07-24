import Document, { Html, Head, Main, NextScript } from 'next/document'
import config from '../config/config';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={config.siteLang}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
