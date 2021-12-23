import React from 'react';
import { Link } from 'react-router-dom';
import Text from '@components/atoms/Text';

const ToSignUp = () => {
  return (
    <Link to="/signup">
      <Text color="blue" weight="bold">
        가입하기
      </Text>
    </Link>
  );
};

export default ToSignUp;
