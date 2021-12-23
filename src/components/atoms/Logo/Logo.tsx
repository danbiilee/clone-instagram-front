import React from 'react';
import styles from './Logo.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Logo = () => {
  const { pathname } = window.location;
  const isAccounts = pathname === '/' || pathname.includes('login') || pathname.includes('signup');

  return <h1 className={cx('logo', `${isAccounts ? 'accounts' : 'main'}`)}>Instagram</h1>;
};

export default Logo;
