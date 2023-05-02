import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu, { navLinkStyle } from './Menu';

const WebpageNav = () => {
  return (
    <section id='webpage-navigation' className='my-0 py-0 text-sm block fixed w-60 '>
      <h1>
        <NavLink className='text-lg capitalize' style={navLinkStyle} to={'/'} >luffysfightclub</NavLink>
      </h1>
      <nav className='pt-10'>
        <Menu />
      </nav>
    </section>
  );
};

export default WebpageNav;