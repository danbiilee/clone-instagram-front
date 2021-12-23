import React from 'react';
import TestImage from '@images/test.png';
import styles from './Image.module.scss';

const Image = () => {
  return <img className={styles.image} src={TestImage} alt="preview" />;
};

export default Image;
