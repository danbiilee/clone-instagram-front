import React, { useEffect, useState } from 'react';
import Input from '@components/atoms/Input';
import styles from './InputFields.module.scss';
import { userDefaultState } from '@components/organisms/Form/SignUp';

interface SignUpProps {
  user: typeof userDefaultState;
  setUser: React.Dispatch<React.SetStateAction<typeof userDefaultState>>;
}

interface IndexReg {
  [index: string]: RegExp;
}
const reg: IndexReg = {
  id: /^[0-9a-zA-Z][0-9a-zA-Z_]{3,14}$/,
  email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  password: /a/,
  name: /a/,
};

const SignUp: React.FC<SignUpProps> = ({ user, setUser }) => {
  const [validation, setValidation] = useState({
    id: undefined,
    email: undefined,
    password: undefined,
    name: undefined,
  });
  console.log('validation', validation);

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setUser((user) => ({ ...user, [name]: value }));

    // Check Validation

    if (!value) {
      setValidation((valid) => ({ ...valid, [name]: undefined }));
    } else {
      setValidation((valid) => ({ ...valid, [name]: reg[name]!.test(value) }));
    }
  };

  useEffect(() => {
    if(validation.)
  }, [validation])

  return (
    <div className={styles.signup}>
      <Input type="text" name="id" placeholder="아이디" data={user.id} isValid={validation.id} onChange={onChange} />
      <Input
        type="text"
        name="email"
        placeholder="이메일"
        data={user.email}
        isValid={validation.email}
        onChange={onChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="비밀번호"
        data={user.password}
        isValid={validation.password}
        onChange={onChange}
      />
      <Input
        type="text"
        name="name"
        placeholder="이름"
        data={user.name}
        isValid={validation.name}
        onChange={onChange}
      />
    </div>
  );
};

export default SignUp;
