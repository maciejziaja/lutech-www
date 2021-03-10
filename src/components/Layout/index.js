import React from 'react';
import Helmet from 'react-helmet';

import config from '../../../config/config';
import '@fontsource/ubuntu';
import 'normalize.css';
import './index.css';

const Layout = ({ children }) => (
  <>
    <Helmet
      title={config.siteTitle}
      meta={[
        { name: 'description', content: config.siteDescription },
        { name: 'keywords', content: config.siteKeyword },
      ]}
    >
      <html lang={config.siteLang} />
    </Helmet>
    <div>{children}</div>
  </>
);

export default Layout;
