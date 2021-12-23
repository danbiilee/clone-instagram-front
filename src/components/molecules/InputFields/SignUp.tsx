import React from 'react';
import Input from '@components/atoms/Input';

interface SignUpProps {
  className?: string;
}

const SignUp: React.FC<SignUpProps> = ({ className }) => {
  return (
    <div className={className}>
      <Input type="text" placeholder="아이디" />
      <Input type="text" placeholder="이메일" />
      <Input type="password" placeholder="비밀번호" />
      <Input type="text" placeholder="이름" />
    </div>
  );
};

export default SignUp;
