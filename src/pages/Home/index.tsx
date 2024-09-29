import styles from './Home.module.css';
import { Form } from '../../components/Form';

export const Home = () => {
  return (
    <div id={styles.home}>
      <Form />
    </div>
  );
};
