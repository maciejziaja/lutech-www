import React from 'react';
import styles from './index.module.css';

const Collection = ({ items, isBold }) => (
  <ul className={isBold ? styles.boldList : styles.list}>
    {items.map((item, i) => (
      <li key={i} className={styles.item}>
        {item}
      </li>
    ))}
  </ul>
);

export default Collection;
