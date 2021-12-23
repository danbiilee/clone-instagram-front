import React from 'react';
import Button from '@components/atoms/Button';
import { Thumbnail } from '@components/atoms/Icon';

const EditThumbnail = () => {
  return (
    <Button type="button">
      <Thumbnail size="lg" />
    </Button>
  );
};

export default EditThumbnail;
