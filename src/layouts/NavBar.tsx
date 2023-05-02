import WebpageNav from './WebpageNav';
import MobileNav from './MobileNav';
import { useMediaQuery } from 'react-responsive'
import { md } from '../assets/responsiveDesignConstants';

const NavBar = () => {

  const isWebpage = useMediaQuery(md)

  return (
    <article className='font-semibold tracking-wider uppercase 
    '>
      {isWebpage
        ? <WebpageNav />
        : <MobileNav />}
    </article>
  );
};

export default NavBar;