import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import { BR, CN, JP, KR } from 'country-flag-icons/react/3x2';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { headerTranslate } from '../../utils/LanguagesDictionary/HeaderTranslation';
import { useScreenSize } from '../../hooks/useScreenSize';
import { Link } from 'react-router-dom';
import { FormDataContext } from '../../contexts/FormContext';

export const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { setFormData } = useContext(FormDataContext);
  const { windowDimension } = useScreenSize();
  let size = 50;
  const resize = () => {
    if (windowDimension.windowWidth <= 650) {
      size -= 20;
    }
  };
  resize();
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
      <h1>{headerTranslate(language)}</h1>
    </div>
  );
};
