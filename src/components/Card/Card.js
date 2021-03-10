import React from 'react';
import styles from './Card.module.css';

const Card = ({ children }) => <div className={styles.wrapper}>{children}</div>;

export default Card;
