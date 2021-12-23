import React from 'react';
import Image from '@components/atoms/Image';
import styles from './Thumbnail.module.scss';

const Thumbnail = () => {
  return (
    <li className={styles.thumbnail}>
      <Image />
    </li>
  );
};

export default Thumbnail;
