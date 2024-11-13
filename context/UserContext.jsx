import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

export const UserContext = createContext();

// estado del usuario
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); 
    const navigate = useNavigate(); 

    const login = (userData) => {
        setUser(userData); 
        localStorage.setItem('lastPath', window.location.pathname); // ultima pagina 
    };

    const logout = () => {
        setUser(null); 
        navigate('/login', { replace: true }); // vuelve al login
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};