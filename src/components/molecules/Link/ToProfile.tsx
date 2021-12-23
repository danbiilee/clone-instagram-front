import React from 'react';
import { Link } from 'react-router-dom';
import { Thumbnail } from '@components/atoms/Icon';

const ToProfile = () => {
  return (
    <Link to="/profile">
      <Thumbnail size="sm" />
    </Link>
  );
};

export default ToProfile;
