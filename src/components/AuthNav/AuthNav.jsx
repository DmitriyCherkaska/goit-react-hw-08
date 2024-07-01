import style from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div className={style.nav}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
