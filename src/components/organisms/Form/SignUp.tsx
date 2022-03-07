import React, { useState } from 'react';
import styles from './Form.module.scss';
import { SignUpInputs } from '@components/molecules/InputFields';
import { SignUpButton } from '@components/molecules/Button';

export const userDefaultState = {
  id: '',
  email: '',
  password: '',
  name: '',
};

const SignUp = () => {
  const [user, setUser] = useState(userDefaultState);

  return (
    <div className={styles.signup}>
      <SignUpInputs user={user} setUser={setUser} />
      <SignUpButton />
    </div>
  );
};

export default SignUp;
