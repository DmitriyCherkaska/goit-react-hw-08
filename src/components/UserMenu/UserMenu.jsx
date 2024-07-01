// import style from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/slice';
import { logout } from '../../redux/auth/operations';
import { MdLogout } from 'react-icons/md';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button type="button" onClick={() => dispatch(logout())}>
        <MdLogout size={26} />
      </button>
    </div>
  );
};
