import style from './Footer.module.css';
import { FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div>
      <footer className={style.container}>
        <p className={style.text}>Created by Dmitriy</p>
        <p className={style.text}>© 2024 Phonebook</p>
        <p className={style.text}>
          Built with HTML, CSS, JavaScript, React, Redux, Redux Persist
        </p>
        <p className={style.text}>
          Connect with me on
          <a
            href="https://www.linkedin.com/in/dmitriy-cherkaska-3962912b0/"
            target="_blank"
          >
            <FaLinkedin fill="rgb(182 205 212)" size={22} />
          </a>
        </p>
      </footer>
    </div>
  );
};
