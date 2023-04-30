import { CSSProperties, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useDelayUnmount from '../hooks/useDelayUnmount';
import AnimateHeight from 'react-animate-height';
import Menu, { navLinkStyle } from './Menu';

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<0 | 'auto'>(0);


  const toggleMobileMenuHandler = () => {
    setShowMobileMenu(showMobileMenu === 0 ? 'auto' : 0)
  }

  return (
    <article className='py-5 my-5 font-semibold tracking-wider uppercase text-base
    md:my-0 md:py-0 md:text-sm'>
      <section className='flex justify-between
       md:flex-col md:fixed md:w-60 '>
        <h1>
          <NavLink className='text-xl md:text-lg' style={navLinkStyle} to={'/'} >luffysfightclub</NavLink>
        </h1>
        <button onClick={toggleMobileMenuHandler} className='md:hidden h-7 w-7 relative cursor-pointer flex justify-center items-center '>
          <div className={'absolute w-7 h-1 rounded before:bg-neutral-400 before:absolute before:h-1 before:w-7 before:right-0  before:rounded before:content-[""] after:bg-neutral-400 after:absolute after:h-1 after:w-7 after:right-0 after:rounded after:content-[""] ' + (showMobileMenu ? ' before:top-0 before:rotate-45 before:[transition:transform_ease_.2s_.2s,top_ease_.2s] after:top-0 after:-rotate-45 bg-transparent [transition:transform_ease_.2s_.2s,top_ease_.2s] after:[transition:transform_ease_.2s_.2s,top_ease_.2s]' : ' before:-top-2 bg-neutral-400 [transition:top_ease_.2s_.2s,_transform_ease_.2s] before:[transition:top_ease_.2s_.2s,_transform_ease_.2s] after:[transition:top_ease_.2s_.2s,_transform_ease_.2s] after:top-2 ')}></div>
        </button>
        <nav aria-label='webpage-navigation' className='hidden md:block md:py-10'>
          <Menu />
        </nav>
      </section>
      <section className={'md:hidden text-center '}>
        <AnimateHeight duration={400} height={showMobileMenu}>
          <hr className=' my-5' />
          <nav aria-label='mobile-navigation'>
            <Menu />
          </nav>
        </AnimateHeight>
      </section>
    </article>
  );
};

export default NavBar;