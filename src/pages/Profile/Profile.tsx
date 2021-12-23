import React from 'react';
import styles from './Profile.module.scss';
import Header from '@components/organisms/Header';
import Footer from '@components/organisms/Footer';
import UserInfo from '@components/organisms/UserInfo';
import Tabs from '@components/organisms/Tabs';
import Thumbnails from '@components/organisms/Thumbnails';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Header />
      <main className={styles.main}>
        <UserInfo />
        <div className={styles.posts}>
          <Tabs />
          <Thumbnails />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
