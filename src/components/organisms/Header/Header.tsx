import React from 'react';
import styles from './Header.module.scss';
import { ToMain } from '@components/molecules/Link';
import Nav from '../Nav';

const Header = () => {
  const { pathname } = window.location;
  const isAccounts = pathname === '/' || pathname.includes('login') || pathname.includes('signup');

  if (isAccounts) {
    return (
      <header>
        <ToMain />
      </header>
    );
  }

  return (
    <header className={styles.header}>
      <ToMain />
      <Nav />
    </header>
  );
};

export default Header;
