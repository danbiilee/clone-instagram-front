import React from 'react';
import styles from './Footer.module.scss';
import { ToMeta } from '@components/molecules/OutLink';

const Footer = () => {
  const { pathname } = window.location;
  const isAccounts = pathname === '/' || pathname.includes('login') || pathname.includes('signup');

  return (
    <footer className={isAccounts ? '' : styles.footer}>
      <ToMeta />
    </footer>
  );
};

export default Footer;
