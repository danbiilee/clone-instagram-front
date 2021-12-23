import React from 'react';
import { ToWallpaperSource } from '@components/molecules/OutLink';
import styles from './SideWallpaper.module.scss';

const SideWallpaper = () => {
  return (
    <div className={styles.wallpaper}>
      <ToWallpaperSource />
    </div>
  );
};

export default SideWallpaper;
