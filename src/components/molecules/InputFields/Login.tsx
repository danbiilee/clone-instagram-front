import React from 'react';
import Input from '@components/atoms/Input';

interface LoginProps {
  className?: string;
}

const Login: React.FC<LoginProps> = ({ className }) => {
  return (
    <div className={className}>
      <Input type="text" name="id" placeholder="아이디 또는 이메일" />
      <Input type="password" name="password" placeholder="비밀번호" />
    </div>
  );
};

export default Login;
