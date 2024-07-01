// import style from './Footer.module.css';
import { FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div>
      <footer>
        <p>Created by Inna Kushnir</p>
        <p>© 2024 Phonebook</p>
        <p>Built with HTML, CSS, JavaScript, React, Redux, Redux Persist</p>
        <p>
          Connect with me on
          <a href="https://www.linkedin.com/in/-inna-kushnir-" target="_blank">
            <FaLinkedin fill="rgb(182 205 212)" size={22} />
          </a>
        </p>
      </footer>
    </div>
  );
};
