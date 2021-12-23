import React from 'react';
import styles from './SignUp.module.scss';
import Header from '@components/organisms/Header';
import Footer from '@components/organisms/Footer';
import SignIntegration from '@components/organisms/SignIntegration';
import SignGuide from '@components/organisms/SignGuide';
import SideWallpaper from '@components/organisms/SideWallpaper';
import { SignUpForm } from '@components/organisms/Form';

const SignUp = () => {
  return (
    <div className={styles.wrapper}>
      <SideWallpaper />
      <section className={styles.login}>
        <Header />
        <main className={styles.main}>
          <SignIntegration type="signup" />
          <SignUpForm />
          <SignGuide type="signup" />
        </main>
        <Footer />
      </section>
    </div>
  );
};

export default SignUp;
