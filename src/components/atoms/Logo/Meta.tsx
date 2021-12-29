import React from 'react';
import styles from './Logo.module.scss';
import Img from '@assets/images/logo-meta.png';

const Meta = () => {
  return <img className={styles.meta} src={Img} alt="from meta" />;
};

export default Meta;
