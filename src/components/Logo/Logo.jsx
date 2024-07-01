import style from './Logo.module.css';
import { MdBadge } from 'react-icons/md';

const Logo = () => {
  return (
    <header className={style.header}>
      <div className={style.divWrapper}>
        <h1 className={style.title} data-text="Contacts book">
          <MdBadge className={style.icon} size={50} />
          <br />
          Contacts book
        </h1>
      </div>
    </header>
  );
};
export default Logo;
