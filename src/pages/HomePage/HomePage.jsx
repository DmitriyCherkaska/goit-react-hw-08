import style from './HomePage.module.css';
import Logo from '../../components/Logo/Logo';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/slice';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <div>
        <Logo />
        <h1 className={style.title}>
          Your personal contact book! <br />
          <br />
          Convenient storage for your contacts. <br />
          <br />
          Let is start!
        </h1>
        <div>
          {isLoggedIn ? (
            <Link to="/contacts">Contacts</Link>
          ) : (
            <Link to="/register">Register</Link>
          )}
        </div>
      </div>
    </>
  );
};
export default HomePage;
