import React from 'react';
import styles from './Form.module.scss';
import { SignUpInputs } from '@components/molecules/InputFields';
import { SignUpButton } from '@components/molecules/Button';

const SignUp = () => {
  return (
    <div className={styles.signup}>
      <SignUpInputs className={styles.inputs} />
      <SignUpButton />
    </div>
  );
};

export default SignUp;
