import BottomNav from '@/components/BottomNav';
import React, { useEffect } from 'react';
import '@/static/iconfont/iconfont.css';
import { Location } from 'umi';
import styles from './BasicLayout.less';

interface BasicLayoutProps {
  location: Location;
}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { children, location } = props;
  const { pathname } = location;

  useEffect(() => {}, []);

  return (
    <div className={styles.main}>
      <article>{children}</article>
      <footer>
        <BottomNav pathname={pathname} />
      </footer>
    </div>
  );
};

export default BasicLayout;
