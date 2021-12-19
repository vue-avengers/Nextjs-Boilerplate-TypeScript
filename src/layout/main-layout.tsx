import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>
        <ul>
          <li>Lorem Ipsum</li>
          <li>Dolor Sit</li>
          <li>Lorem</li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export { MainLayout };
