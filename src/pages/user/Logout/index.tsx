import React from 'react';
import { WingBlank, Button } from 'antd-mobile';

interface LogoutProps {
  logout: Function;
}
const Logout: React.FC<LogoutProps> = ({ logout }) => {
  return (
    <WingBlank size="lg">
      <Button type="primary" onClick={() => logout()}>
        退出登录
      </Button>
    </WingBlank>
  );
};
export default Logout;
