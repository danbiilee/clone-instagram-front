import React from 'react';
import styles from './SignIntegration.module.scss';
import { TypeSignGuide } from '@customTypes/organisms';
import { ToFacebookLogin, ToFacebookSignUp } from '@components/molecules/OutLink';
import Text from '@components/atoms/Text';

interface SignIntegrationProp {
  type: TypeSignGuide;
}

const SignIntegration: React.FC<SignIntegrationProp> = ({ type }) => {
  return (
    <>
      {type === 'login' ? <ToFacebookLogin /> : <ToFacebookSignUp />}
      <div className={styles.divider}>
        <span className={styles.line}></span>
        <Text color="gray-400">또는</Text>
        <span className={styles.line}></span>
      </div>
    </>
  );
};

export default SignIntegration;
