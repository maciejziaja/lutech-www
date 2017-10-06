import React from 'react';
import styles from './Social.module.css';

const Social = ({ social }) => (
  <a href={social.url} className={styles.link}>
    <img src={`/social/${social.name}.svg`} className={styles.logo} alt={social.description}/>
  </a>
);

export default Social;
