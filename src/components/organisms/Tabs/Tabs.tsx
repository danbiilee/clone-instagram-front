import React from 'react';
import styles from './Tabs.module.scss';
import Tab from '@components/molecules/Tab';

const Tabs = ({}) => {
  return (
    <ul className={styles.tabs}>
      <Tab type="tab-listed" selected={true} />
      <Tab type="tab-saved" />
      <Tab type="tab-tagged" />
    </ul>
  );
};

export default Tabs;
