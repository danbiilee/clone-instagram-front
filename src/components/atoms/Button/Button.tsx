import React from 'react';
import styles from './Button.module.scss';
import { ButtonType, ButtonSize } from '../atom';

interface ButtonProps {
  size?: ButtonSize;
  filled?: boolean;
  outlined?: boolean;
  inactive?: boolean;
  type: ButtonType;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, children, ...props }) => {
  const getClassNames = () => {
    if (!props) {
      return;
    }

    let result = styles.button;
    for (let key of Object.keys(props)) {
      const value = props[key as keyof Omit<ButtonProps, 'type' | 'children'>];
      if (typeof value === 'boolean' && value) {
        result += ` ${styles[key]}`;
      }
      if (typeof value === 'string') {
        result += ` ${styles[value]}`;
      }
    }

    return result;
  };

  return (
    <button type={type} className={getClassNames()} disabled={true}>
      {children}
    </button>
  );
};

export default Button;
