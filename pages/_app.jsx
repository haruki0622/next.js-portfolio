import '../styles/globals.css';
import AOS from 'aos';
import '../styles/aos.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;