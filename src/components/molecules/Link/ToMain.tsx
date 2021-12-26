import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@components/atoms/Logo';

const ToMain = () => {
  return (
    <Link to="/profile">
      <Logo />
    </Link>
  );
};

export default ToMain;
