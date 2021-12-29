import React from 'react';
import styles from './Input.module.scss';
import { InputType } from '../atom';

interface InputProps {
  type: InputType;
  name: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ ...props }) => {
  return <input className={styles.input} {...props} />;
};

export default Input;
