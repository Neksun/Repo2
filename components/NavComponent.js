import { NavLink } from 'react-router-dom';
import { useContext } from 'react'; 
import { UserContext } from '../context/UserContext'; 
import '../Styles/NavBarStyle.css';

export const NavComponent = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <nav className="nav-bar">
            <NavLink 
                to="/" 
                className={({ isActive }) => (isActive ? 'active' : '')}
            >
                Home
            </NavLink>
            <NavLink 
                to="/about" 
                className={({ isActive }) => (isActive ? 'active' : '')}
            >
                About
            </NavLink>

            {user ? (
                <>
                    <span style={{ color: '#fff', marginLeft: '1rem' }}>
                        Bienvenido, {user.name}
                    </span>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <NavLink 
                    to="/login" 
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    Login
                </NavLink>
            )}
        </nav>
    );
};
