import Head from 'next/head'

import styles from './home.module.css';
import CountdownTimer from '../../components/countdownTimer/countdownTimer';

export default function HomePage() {
  return (
    <section>
      <Head>
        <title>Soraia & João - Página Inicial</title>
        <meta name="description" content="Casamento Soraia & João" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.homeContainer}>
        <div>
          <h1 className={styles.title}>19 de Maio, 2023</h1>
          <h3 className={styles.subTitle}>Quinta da Bichinha</h3>
        </div>
        <CountdownTimer />
      </div>
    </section>
  );
}
