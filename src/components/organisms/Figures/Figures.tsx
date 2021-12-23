import React from 'react';
import styles from './Figures.module.scss';
import Figure from '@components/molecules/Figure';

const Figures = () => {
  return (
    <ul className={styles.figures}>
      <Figure />
      <Figure />
      <Figure />
    </ul>
  );
};

export default Figures;
