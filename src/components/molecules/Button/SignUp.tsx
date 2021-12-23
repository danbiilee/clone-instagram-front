import React from 'react';
import Button from '@components/atoms/Button';
import Text from '@components/atoms/Text';

const SignUp = () => {
  return (
    <Button type="submit" size="lg" filled={true} inactive={true}>
      <Text color="white" weight="medium">
        가입
      </Text>
    </Button>
  );
};

export default SignUp;
