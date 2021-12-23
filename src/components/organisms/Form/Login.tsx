import React from 'react';
import { LoginInputs } from '@components/molecules/InputFields';
import { LoginButton } from '@components/molecules/Button';
import { ToFindPassword } from '@components/molecules/Link';
import styles from './Form.module.scss';

const Login = () => {
  return (
    <div className={styles.login}>
      <LoginInputs className={styles.inputs} />
      <ToFindPassword className={styles.findPassword} />
      <LoginButton />
    </div>
  );
};

export default Login;
