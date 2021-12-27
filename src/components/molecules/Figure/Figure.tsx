import React from 'react';
import Text from '@components/atoms/Text';
import styles from './Figure.module.scss';

const Figure = () => {
  return (
    <li className={styles.figure}>
      <Text className={styles.title} size="sm">
        게시물
      </Text>
      <Text className={styles.cnt} size="lg" weight="bold">
        2
      </Text>
    </li>
  );
};

export default Figure;
