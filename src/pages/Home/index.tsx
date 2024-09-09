import { useContext } from 'react';
import styles from './Home.module.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { homeTranslate } from '../../utils/LanguagesDictionary/HomeTranslation';

export const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div id={styles.home}>
      <h1>{homeTranslate(language)}</h1>
    </div>
  );
};
