import Head from 'next/head'

import styles from './stay.module.css';

export default function StayPage() {
  return (
    <div>
      <Head>
        <title>Soraia & João - Onde ficar</title>
        <meta name="description" content="Casamento Soraia & João" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1 className={styles.title}>Onde Ficar</h1>
      </section>
    </div>
  );
}
