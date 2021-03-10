import BottomNav from '@/components/BottomNav';
import React, { useEffect } from 'react';
import '@/static/iconfont/iconfont.css';
import { Location, connect, Dispatch } from 'umi';
import styles from './BasicLayout.less';

interface BasicLayoutProps {
  location: Location;
  dispatch: Dispatch;
}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  console.log('props', props);
  const { children, location, dispatch } = props;
  const { pathname } = location;

  useEffect(() => {
    // 获取用户基本信息
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []);

  return (
    <div className={styles.main}>
      <article>{children}</article>
      <footer>
        <BottomNav pathname={pathname} />
      </footer>
    </div>
  );
};

export default connect(({ user }: any) => ({ user }))(BasicLayout);
