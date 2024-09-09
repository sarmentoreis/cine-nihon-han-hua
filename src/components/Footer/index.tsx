import { useContext } from 'react';
import styles from './Footer.module.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { footerTranslate } from '../../utils/LanguagesDictionary/FooterTranslation';

export const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className={styles.footer}>
      <p>{footerTranslate(language)}</p>
    </div>
  );
};
