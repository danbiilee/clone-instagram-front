import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './Nav.module.scss';
import { OpenPostModal, SearchButton } from '@components/molecules/Button';
import { ToProfile } from '@components/molecules/Link';
import { SearchInput } from '@components/molecules/InputFields';

const Nav = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <nav className={styles.nav}>
      {!isMobile ? (
        <>
          <SearchInput />
          <div className={styles.buttons}>
            <OpenPostModal />
            <ToProfile />
          </div>
        </>
      ) : (
        <>
          <OpenPostModal />
          <SearchButton />
          <ToProfile />
        </>
      )}
    </nav>
  );
};

export default Nav;
