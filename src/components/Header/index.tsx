import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import { BR, CN, JP, KR } from 'country-flag-icons/react/3x2';
import { useContext, useState } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { headerTranslate } from '../../utils/LanguagesDictionary/HeaderTranslation';
import { useScreenSize } from '../../hooks/useScreenSize';
import { Link } from 'react-router-dom';
import { FormDataContext } from '../../contexts/FormContext';

export const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { setFormData } = useContext(FormDataContext);
  const { windowDimension } = useScreenSize();
  const [menuOpen, setMenuOpen] = useState(false);
  let size = 50;

  const resize = () => {
    if (windowDimension.windowWidth <= 650) {
      size -= 20;
    }
  };
  resize();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.header}>
      <Link to={'/home'} style={{ color: 'inherit', textDecoration: 'none' }}>
        <img
          onClick={() =>
            setFormData({
              age: null,
              asian: true,
              discovery: '',
              decade: 0,
              genre: '',
              releaseYear: '',
            })
          }
          src={logo}
          alt="Cine Nihon-Han-Hua"
        />
      </Link>

      {windowDimension.windowWidth <= 650 ? (
        <div className={styles.menuContainer}>
          <button className={styles.menuButton} onClick={toggleMenu}>
            ☰
          </button>
          {menuOpen && (
            <div className={styles.languageMenu}>
              <div
                onClick={() => {
                  setLanguage('pt');
                  setMenuOpen(false);
                }}
                className={styles.flagItem}
              >
                <BR title="Brazilian Portuguese" width={size} />
              </div>
              <div
                onClick={() => {
                  setLanguage('jp');
                  setMenuOpen(false);
                }}
                className={styles.flagItem}
              >
                <JP title="Japanese" width={size} />
              </div>
              <div
                onClick={() => {
                  setLanguage('kr');
                  setMenuOpen(false);
                }}
                className={styles.flagItem}
              >
                <KR title="Korean" width={size} />
              </div>
              <div
                onClick={() => {
                  setLanguage('cn');
                  setMenuOpen(false);
                }}
                className={styles.flagItem}
              >
                <CN title="Chinese" width={size} />
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <BR
            title="Brazilian Portuguese"
            width={size}
            onClick={() => setLanguage('pt')}
            cursor={'pointer'}
          />
          <JP
            title="Japanese"
            width={size}
            onClick={() => setLanguage('jp')}
            cursor={'pointer'}
          />
          <KR
            title="Korean"
            width={size}
            onClick={() => setLanguage('kr')}
            cursor={'pointer'}
          />
          <CN
            title="Chinese"
            width={size}
            onClick={() => setLanguage('cn')}
            cursor={'pointer'}
          />
        </>
      )}

      <h1>{headerTranslate(language)}</h1>
    </div>
  );
};
