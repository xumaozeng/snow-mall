import BottomNav from '@/components/BottomNav';
import React, { useEffect } from 'react';

interface BasicLayoutProps {}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { children } = props;
  useEffect(() => {}, []);
  return (
    <div>
      <article>{children}</article>
      <BottomNav />
    </div>
  );
};

export default BasicLayout;
