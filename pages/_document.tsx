import Document, { Head, Html, Main, NextScript } from 'next/document';
import CustomHead from '../components/lib/head/head.component';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
