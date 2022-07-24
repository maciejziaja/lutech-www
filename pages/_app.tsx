import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script';
import config from '../config/config';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Script id={'ga-wrapper'}>
      {`
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', '${config.analytics.measureId}', 'auto');
  ga('send', 'pageview');
                `}
    </Script>

    <Component {...pageProps} />
  </>
}

export default MyApp
