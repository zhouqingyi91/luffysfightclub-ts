import { NavLink } from 'react-router-dom';
import { navLinkStyle } from './Menu';

const HomeLink = () => {
  return (
    <h1>
      <NavLink className='text-xl md:text-lg capitalize' style={navLinkStyle} to={'/'} >luffysfightclub</NavLink>
    </h1>
  );
};

export default HomeLink;