import React from 'react';
import Button from '@components/atoms/Button';
import Text from '@components/atoms/Text';

const ToEditProfile = () => {
  return (
    <Button type="button" outlined={true} wide={true}>
      <Text>프로필 편집</Text>
    </Button>
  );
};

export default ToEditProfile;
