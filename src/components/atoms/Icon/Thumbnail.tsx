import React from 'react';
import Img from '@assets/images/thumbnail.jpg';
import { ThumbSize } from '../atom';
import styles from './Icon.module.scss';

interface IThumbnail {
  size: ThumbSize;
}

const Thumbnail: React.FC<IThumbnail> = ({ size }) => {
  const px = size === 'sm' ? 24 : 160;
  return (
    <img className={`${styles.thumbnail} ${styles[size]}`} src={Img} alt="profile thumbnail" width={px} height={px} />
  );
};

export default Thumbnail;
