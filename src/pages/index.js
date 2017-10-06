import React from 'react';
import styles from './index.module.css';
import config from '../../config/config';
import Social from '../components/Social';

const socials = config.socials.map(social => <Social social={social} key={social.name} />);

const IndexPage = () => (
  <div>
    <h1 className={styles.title}>Lu-Tech</h1>
    <p className={styles.text}>Hey guys, I'm Maciej Ziaja.</p>
    <p className={styles.text}>I'm software developer</p>
    <div className={styles.socials}>
      { socials }
    </div>
  </div>
);

export default IndexPage;
