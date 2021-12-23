import React from 'react';
import styles from './Login.module.scss';
import Header from '@components/organisms/Header';
import Footer from '@components/organisms/Footer';
import SignIntegration from '@components/organisms/SignIntegration';
import { LoginForm } from '@components/organisms/Form';
import SignGuide from '@components/organisms/SignGuide';
import SideWallpaper from '@components/organisms/SideWallpaper';

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <SideWallpaper />
      <section className={styles.login}>
        <Header />
        <main className={styles.main}>
          <SignIntegration type="login" />
          <LoginForm />
          <SignGuide type="login" />
        </main>
        <Footer />
      </section>
    </div>
  );
};

export default Login;
