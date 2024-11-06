import { Link, Navigate,Route, Routes } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { NavComponent } from './NavComponent';

export const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      <hr />

      <NavComponent/>
      

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </>
  );
};

/*<Link to="/">Home</Link>
<Link to="about">About</Link>
<Link to="login">Login</Link>*/