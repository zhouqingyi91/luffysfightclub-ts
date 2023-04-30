import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <ul className='space-y-2 hover:[&>li>a]:text-white'>
      <li>
        <NavLink style={navLinkStyle} to={'/street'} >street</NavLink>
      </li>
      <li>
        <NavLink style={navLinkStyle} to={'/portrait'} >portrait</NavLink>
      </li>
    </ul>
  );
};
const activeLinkStyle: CSSProperties = {
  color: 'white'
}
export const navLinkStyle = ({ isActive }: { isActive: boolean }) => isActive ? activeLinkStyle : undefined;

export default Menu;