import React from 'react';
import styles from './Button.module.scss';
import Button from '@components/atoms/Button';
import { Thumbnail } from '@components/atoms/Icon';

const EditThumbnail = () => {
  return (
    <Button type="button" className={styles.thumbnail}>
      <Thumbnail size="lg" />
    </Button>
  );
};

export default EditThumbnail;
