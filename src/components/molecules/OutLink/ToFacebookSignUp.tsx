import React from 'react';
import Button from '@components/atoms/Button';
import Text from '@components/atoms/Text';
import Icon from '@components/atoms/Icon';
import styles from './OutLink.module.scss';

const ToFacebookSignUp = () => {
  return (
    <Button type="button" size="lg" filled={true}>
      <Icon id="facebook" className={styles.facebook} />
      <Text color="white" weight="medium">
        Facebook으로 가입하기
      </Text>
    </Button>
  );
};

export default ToFacebookSignUp;
