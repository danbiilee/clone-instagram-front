import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './UserInfo.module.scss';
import Text from '@components/atoms/Text';
import { AddIntroduction, EditThumbnail, OpenSettingPopOver } from '@components/molecules/Button';
import { ToEditProfile } from '@components/molecules/Link';
import Figures from '@components/organisms/Figures';

const UserInfo = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className={styles.userInfo}>
      <div className={styles.main}>
        <EditThumbnail />
        <div className={styles.mainInfo}>
          <h2 className={styles.id}>
            <Text size="xl2" weight="black">
              null_un_defined
            </Text>
          </h2>
          <Figures />
          {!isMobile && (
            <>
              <div className={styles.sub}>
                <Text size="lg" weight="bold" className={styles.name}>
                  이단비
                </Text>
                <div className={styles.introduction}>
                  <AddIntroduction />
                </div>
              </div>
              <div className={styles.buttons}>
                <ToEditProfile />
                <OpenSettingPopOver />
              </div>
            </>
          )}
        </div>
      </div>
      {isMobile && (
        <>
          <div className={styles.sub}>
            <Text size="lg" weight="bold" className={styles.name}>
              이단비
            </Text>
            <div className={styles.introduction}>
              <AddIntroduction />
            </div>
          </div>
          <div className={styles.buttons}>
            <ToEditProfile />
            <OpenSettingPopOver />
          </div>
        </>
      )}
    </section>
  );
};

export default UserInfo;
