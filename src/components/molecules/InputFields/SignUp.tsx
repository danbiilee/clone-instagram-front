import React from 'react';
import Input from '@components/atoms/Input';

interface SignUpProps {
  className?: string;
}

const SignUp: React.FC<SignUpProps> = ({ className }) => {
  return (
    <div className={className}>
      <Input type="text" name="id" placeholder="아이디" />
      <Input type="text" name="email" placeholder="이메일" />
      <Input type="password" name="password" placeholder="비밀번호" />
      <Input type="text" name="name" placeholder="이름" />
    </div>
  );
};

export default SignUp;
