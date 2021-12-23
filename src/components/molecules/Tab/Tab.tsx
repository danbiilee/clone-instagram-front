import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './Tab.module.scss';
import { TabType } from '../molecules';
import Icon from '@components/atoms/Icon';
import Text from '@components/atoms/Text';

interface TabProps {
  type: TabType;
  selected?: boolean;
}

const TAB_TITLE = {
  'tab-listed': '게시물',
  'tab-saved': '저장됨',
  'tab-tagged': '태그됨',
};

const Tab: React.FC<TabProps> = ({ type, selected }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <li className={`${styles.tab} ${selected && styles.selected}`}>
      <button type="button" className={styles.button}>
        <Icon id={type} />
        {!isMobile && <Text className={styles.title}>{TAB_TITLE[type]}</Text>}
      </button>
    </li>
  );
};

export default Tab;
