import styles from './Header.module.css';
import logo from '../../assets/logo-ptbr.svg';

export const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Cine Nihon Han Hua</h1>
      <img src={logo} alt="" />
    </div>
  );
};
