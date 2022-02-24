import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          {/* <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,700&display=swap'
            rel='stylesheet'
          ></link> */}
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='font-verda antialiased'>
          <Main />
          <div id='portal'></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
