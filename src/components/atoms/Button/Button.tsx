import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { ButtonType } from '../atom';

const cx = classNames.bind(styles);
interface ButtonProps {
  type: ButtonType;
  filled?: boolean;
  inactive?: boolean;
  outlined?: boolean;
  wide?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, children, ...props }) => {
  const getClassNames = () => {
    if (!props) {
      return;
    }

    let result: string[] = [];

    for (let key of Object.keys(props)) {
      const value = props[key as keyof Omit<ButtonProps, 'type' | 'children'>];
      if (key === 'className' && value) {
        result.push(value as string);
        continue;
      }
      if (value) {
        result.push(key);
      }
    }

    return result;
  };

  return (
    <button type={type} className={cx('button', getClassNames())} disabled={props.inactive}>
      {children}
    </button>
  );
};

export default Button;
