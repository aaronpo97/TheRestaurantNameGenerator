import { FC, ReactNode } from 'react';
import Navbar from './Navbar';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      <header className="top-0">
        <Navbar />
      </header>
      <div className="top-0 h-full flex-1 overflow-x-auto">{children}</div>
    </div>
  );
};

export default Layout;
