import React from 'react';
import { Link } from 'react-router-dom';
import Text from '@components/atoms/Text';

const ToLogin = () => {
  return (
    <Link to="/login">
      <Text color="blue" weight="bold">
        로그인
      </Text>
    </Link>
  );
};

export default ToLogin;
