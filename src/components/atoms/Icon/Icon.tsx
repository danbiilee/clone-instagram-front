import React from 'react';
import styles from './Icon.module.scss';
import Defs from '@assets/images/svg-defs.svg';
import { IconType } from '../atom';

interface IconProps {
  className?: string;
  id: IconType;
}

const Icon: React.FC<IconProps> = ({ className, id }) => {
  return (
    <svg className={`${styles.icon} ${styles[id]} ${className && className}`} viewBox="0 0 24 24">
      <use xlinkHref={`${Defs}#${id}`} />
    </svg>
  );
};

export default Icon;
