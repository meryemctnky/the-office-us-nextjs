import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Sanchez&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='bg-dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
