import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './Layout.module.css';
import { LanguageProvider } from '../../contexts/LanguageContext';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <LanguageProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </LanguageProvider>
    </div>
  );
};
