import Head from 'next/head';

import styles from './invite.module.css';

export default function InvitePage() {
  return (
    <section>
      <Head>
        <title>Soraia & João - Lista de Casamento</title>
        <meta name="description" content="Casamento Soraia & João" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.inviteSection}>
        <div className={styles.textSection}>
          <div>
            <h2 className={styles.title}>Querida Família e amigos,</h2>
            <p className={styles.normalText}>O melhor presente que nos podem oferecer é estarem presentes neste dia tão especial!</p>
            <p className={styles.normalText}>No entanto, caso queiram contribuir para a nossa lua-de-mel, deixamos aqui o nosso IBAN.</p>
            <p className={styles.normalText}>Por favor, identifiquem as transferências para que possamos agradecer.</p>
            <br />
            <p className={styles.normalText}>João Capelinha - PT50 0018 0003 3181 1672 0205 3</p>
            <p className={styles.normalText}>Soraia Ferreira - PT50 0035 0995 0054 6898 6307 9</p>
            <br />
            <p className={styles.normalText}>Muito Obrigado!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
