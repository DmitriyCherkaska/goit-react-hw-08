// import style from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/slice';
import { NavLink } from 'react-router-dom';
import { BiHomeSmile } from 'react-icons/bi';
import { MdOutlineContacts } from 'react-icons/md';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">
        <BiHomeSmile size={26} />
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <MdOutlineContacts size={26} />
        </NavLink>
      )}
    </nav>
  );
};
