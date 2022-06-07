import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
            rel='stylesheet'
          />
          {/* favicon */}
          <link rel='apple-touch-icon' sizes='76x76' href='/favicons/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
          <link rel='manifest' href='/favicons/site.webmanifest' />
          <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#5bbad5' />
        </Head>
        <body className='text-base md:text-lg antialiased font-fonts'>
          <Main />
          <div id='portal'></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
