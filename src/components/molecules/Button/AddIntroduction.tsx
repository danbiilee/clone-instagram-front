import React from 'react';
import Button from '@components/atoms/Button';
import Icon from '@components/atoms/Icon';
import Text from '@components/atoms/Text';
import styles from './Button.module.scss';

const AddIntroduction = () => {
  return (
    <Button type="button">
      <Icon id="add-intro" className={styles['add-intro']} />
      <Text size="sm" color="gray-400">
        소개를 추가하세요
      </Text>
    </Button>
  );
};

export default AddIntroduction;
