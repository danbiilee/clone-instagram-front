import React from 'react';
import Button from '@components/atoms/Button';
import Icon from '@components/atoms/Icon';

const OpenSettingPopOver = () => {
  return (
    <Button type="button" outlined={true}>
      <Icon id="setting" />
    </Button>
  );
};

export default OpenSettingPopOver;
