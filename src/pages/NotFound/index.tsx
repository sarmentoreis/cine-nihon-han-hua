import { useContext } from 'react';
import styles from './NotFound.module.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { notFoundTranslate } from '../../utils/LanguagesDictionary/NotFoundTranslation';
import error from '../../assets/error.png';

export const NotFound = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className={styles.notFound}>
      <div>
        <img src={error} alt="page not found" />
      </div>
      <p>{notFoundTranslate(language)}</p>
    </div>
  );
};
