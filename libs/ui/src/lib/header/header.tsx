import React from 'react';

import './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {
  links?: HeaderLinks[]
}
export interface HeaderLinks {
  label: string, href?: string, target?: string
}



const dummyLinks: HeaderLinks[] = [
  { label: "Home" },
  { label: "About" },
  { label: "Services" },
  { label: "Works" },
  { label: "Journoy" },
  { label: "Blog" },
  { label: "Contact" },
]
export function Header(props: HeaderProps) {

  const links: HeaderLinks[] = props?.links ?? dummyLinks;
  const menuItems = (list: HeaderLinks[]) => {
    return list.map((item: HeaderLinks, index: number) => (
      <a key={`link-$index}`}
        className="hover:text-purple-600 px-2"
        href={item?.href ?? `#${item.label.toLowerCase()}`} target={item?.target ?? "_blank"}>
        {item?.label ?? `link-${index}`}
      </a>)
    )
  };

  return (
    <div className="flex shadow-lg px-4 py-2 justify-between">
      <h1 className="text-2xl text-indigo-600">Fitness Tracker</h1>
      <div className="hidden md:block">
        {menuItems(links)}
      </div>
      <h1 className="block md:hidden text-xl text-indigo-600">menu</h1>
    </div>);
}

export default Header;
