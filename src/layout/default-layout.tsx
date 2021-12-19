import React from 'react';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>
        <ul>
          <li>İhtiyaç Kredisi</li>
          <li>Taşıt Kredisi</li>
          <li>Konut Kredisi</li>
          <li>Mevduat</li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export { DefaultLayout };
