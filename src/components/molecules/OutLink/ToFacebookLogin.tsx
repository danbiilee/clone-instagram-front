import React from 'react';
import Button from '@components/atoms/Button';
import Text from '@components/atoms/Text';
import ICon from '@components/atoms/Icon';
import styles from './OutLink.module.scss';

const ToFacebookLogin = () => {
  return (
    <Button type="button" size="lg" filled={true}>
      <ICon id="facebook" className={styles.facebook} />
      <Text color="white" weight="medium">
        Facebook으로 로그인하기
      </Text>
    </Button>
  );
};

export default ToFacebookLogin;
