import BottomNav from '@/components/BottomNav';
import React, { useEffect } from 'react';
import { connect } from 'umi';
import { ConnectProps, ConnectState, UserModelState } from '@/models/connect';

import '@/static/iconfont/iconfont.css';
import styles from './BasicLayout.less';

interface BasicLayoutProps extends ConnectProps {
  user: UserModelState;
}

// React.FC表示function component函数组件,<props>表示属性类型
const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { children, location, dispatch } = props;

  useEffect(() => {
    // 获取用户基本信息
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []);

  const { pathname } = location;
  const showBottomNav = pathname !== '/login';

  return (
    <div className={styles.main}>
      <article>{children}</article>
      <footer>{showBottomNav && <BottomNav pathname={pathname} />}</footer>
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({ user }))(BasicLayout);
