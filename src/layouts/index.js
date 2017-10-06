import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Fonts from '../components/Fonts';
import config from '../../config/config';
import styles from './index.module.css';
import './index.css';

class TemplateWrapper extends React.Component {
  componentDidMount() {
    Fonts();
  }

  render() {
    const { children } = this.props;

    return (
      <div className={styles.wrapper}>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: 'description', content: config.siteDescription },
            { name: 'keywords', content: config.siteKeyword }
          ]}>
          <html lang={config.siteLang} />
        </Helmet>
        <div className={styles.content}>
          {children()}
        </div>
      </div>
    );
  }
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
