import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styles from './index.module.css';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div className={styles.wrapper}>
    <Helmet
      link={[
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Ubuntu' }
      ]}
      title="Lu-Tech"
      meta={[
        { name: 'description', content: 'Lu-Tech Maciej Ziaja. Software developer' },
        { name: 'keywords', content: 'lu-tech, front-end, front, fe, it, software development, gatsbyjs' }
      ]}
    />
    <div className={styles.content}>
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
