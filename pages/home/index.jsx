import styles from './home.module.css';
import CountdownTimer from '../../components/countdownTimer/countdownTimer';

export default function HomePage() {
  return (
    <section className={styles.homeContainer}>
      <div>
        <h1>19 de Maio, 2023</h1>
        <h3>Quinta da Bichinha</h3>
      </div>
      <CountdownTimer />
    </section>
  );
}
