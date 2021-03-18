import { ConnectProps, ConnectState, UserModelState } from '@/models/connect';
import React, { useEffect } from 'react';
import { connect } from 'umi';
import Header from './Header';
import Logout from './Logout';
import MyList from './MyList';

interface UserProps extends ConnectProps {
  user: UserModelState;
}
const User: React.FC<UserProps> = ({ dispatch, user }) => {
  useEffect(() => {
    // dispatch
    dispatch({ type: 'user/queryDetail' });
  }, []);

  const { name, icon } = user.detail;
  const logout = () => {
    // dispatch
    dispatch({ type: 'user/logout' });
  };

  return (
    <div>
      <Header name={name} icon={icon} />
      <MyList />
      <Logout logout={logout} />
    </div>
  );
};
export default connect(({ user }: ConnectState) => ({ user }))(User);
