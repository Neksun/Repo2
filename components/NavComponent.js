import { NavLink } from 'react-router-dom';
import '../Styles/NavBarStyle.css';

export const NavComponent = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
      <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
    </nav>
  );
};
