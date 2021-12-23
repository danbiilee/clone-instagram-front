import React from 'react';
import { Link } from 'react-router-dom';
import Text from '@components/atoms/Text';

interface ToFindPasswordProps {
  className?: string;
}

const ToFindPassword: React.FC<ToFindPasswordProps> = ({ className }) => {
  return (
    <Link to="/" className={className}>
      <Text color="blue">비밀번호를 잊으셨나요?</Text>
    </Link>
  );
};

export default ToFindPassword;
