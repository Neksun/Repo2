import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const LoginPage = () => {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = () => {

        const userData = {
            id: 123,
            name: 'Elpepe',
            email: 'elpepe@hotmail.com'
        };

        login(userData); // autenticar al usuario

        // redirigir a la última página o a home si no hay página previa
        const lastPath = localStorage.getItem('lastPath') || '/';
        navigate(lastPath, { replace: true });
    };

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};