import '../styles/globals.css';
import AOS from 'aos';
import '../styles/aos.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // 追加
    AOS.init();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
