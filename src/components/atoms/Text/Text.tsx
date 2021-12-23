import React from 'react';
import styles from './Text.module.scss';
import { FontSize, FontWeight, Color } from '@components/atoms/atom';

interface TextProps {
  size?: FontSize;
  weight?: FontWeight;
  color?: Color;
  className?: string;
  children: string;
}

const Text: React.FC<TextProps> = ({ className, children, ...props }) => {
  const getClassNames = () => {
    if (!props) {
      return;
    }

    let result = styles.text;
    for (let key of Object.keys(props)) {
      const value = props[key as keyof Omit<TextProps, 'className' | 'children'>]!;
      result += ` ${styles[value]}`;
    }

    if (className) {
      result += ` ${className}`;
    }

    return result;
  };

  return <span className={getClassNames()}>{children}</span>;
};

export default Text;
