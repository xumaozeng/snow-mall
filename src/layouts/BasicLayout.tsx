import BottomNav from '@/components/BottomNav';
import React, { useEffect } from 'react';
import { Location, connect, Dispatch } from 'umi';
import { ConnectState } from '@/models/connect';

import '@/static/iconfont/iconfont.css';
import styles from './BasicLayout.less';

interface BasicLayoutProps {
  location: Location;
  dispatch: Dispatch;
}

// React.FC表示function component函数组件,<props>表示属性类型
const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
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

export default connect(({ user }: ConnectState) => ({ user }))(BasicLayout);
