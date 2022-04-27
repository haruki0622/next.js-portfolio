import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='text-base md:text-lg antialiased font-sans'>
          <Main />
          <div id='portal'></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
