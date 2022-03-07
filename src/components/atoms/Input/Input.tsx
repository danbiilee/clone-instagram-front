import React from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';
import { InputType } from '../atom';
import Icon from '../Icon';

const cx = classNames.bind(styles);

interface InputProps {
  type: InputType;
  name: string;
  placeholder: string;
  data?: string;
  isValid?: boolean | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({ placeholder, data, isValid, onChange, ...props }) => {
  return (
    <div className={cx('wrapper', { up: data })}>
      <span className={styles.title}>{placeholder}</span>
      <input className={styles.input} {...props} onChange={onChange} />
      {isValid !== undefined && isValid && <Icon id="valid" className={cx('icon', 'valid')} />}
      {isValid !== undefined && !isValid && <Icon id="notValid" className={cx('icon', 'not-valid')} />}
    </div>
  );
};

export default Input;
