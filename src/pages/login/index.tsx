import { ConnectProps, ConnectState, UserModelState } from '@/models/connect';
import React from 'react';
import { connect, Redirect } from 'umi';
import styles from './index.less';
import LoginForm from './LoginForm';

interface LoginProps extends ConnectProps {
  user: UserModelState;
}

const Login: React.FC<LoginProps> = ({ user, location }) => {
  const { userid } = user.currentUser;
  const isLogin = !!userid;
  if (isLogin) {
    const { from = '/' } = location.state || {};
    return <Redirect to={from} />;
  }
  return (
    <div className={styles.main}>
      <div className={styles.logo}></div>
      <LoginForm />
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({ user }))(Login);
