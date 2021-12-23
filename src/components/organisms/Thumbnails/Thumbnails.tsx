import React from 'react';
import Thumbnail from '@components/molecules/Thumbnail';
import styles from './Thumbnails.module.scss';

const Thumbnails = () => {
  return (
    <ul className={styles.thumbnails}>
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
    </ul>
  );
};

export default Thumbnails;
