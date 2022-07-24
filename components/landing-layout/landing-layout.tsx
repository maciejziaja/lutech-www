import Head from 'next/head';

import styles from './landing-layout.module.css';
import config from '../../config/config';

interface Props {
  children: React.ReactNode;
}

export const LandingLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.siteDescription} />
        <meta name="keywords" content={config.siteKeyword} />
      {/*  <html lang={config.siteLang} />*/}
      </Head>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
