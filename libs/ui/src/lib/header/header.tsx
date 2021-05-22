import React from 'react';

import './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className="container bg-yellow-600 mx-auto p-3 shadow-sm ring-0">
      <h1 className="text-2xl">Welcome to header!</h1>
    </div>
  );
}

export default Header;
