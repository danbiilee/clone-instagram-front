import React from 'react';
import styles from './SignGuide.module.scss';
import { TypeSignGuide } from '@customTypes/organisms';
import Text from '@components/atoms/Text';
import { ToLogin, ToSignUp } from '@components/molecules/Link';

interface SignGuideProps {
  type: TypeSignGuide;
}

const SignGuide: React.FC<SignGuideProps> = ({ type }) => {
  return (
    <div className={styles.guide}>
      <Text className={styles.text}>{`계정이 ${type === 'login' ? '없으신가요' : '있으신가요'}?`}</Text>
      {type === 'login' ? <ToSignUp /> : <ToLogin />}
    </div>
  );
};

export default SignGuide;
