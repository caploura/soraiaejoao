import Head from 'next/head';

import styles from './stay.module.css';

import { GiPathDistance } from 'react-icons/gi';
import { ImPriceTags } from 'react-icons/im';

export default function StayPage() {
  return (
    <div>
      <Head>
        <title>Soraia & João - Onde ficar</title>
        <meta name="description" content="Casamento Soraia & João" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className={styles.hotelContainer}>
          <a
            target="blank"
            href="https://www.booking.com/hotel/pt/cambeiros-guest-house.en-gb.html?aid=356980&label=gog235jc-1DCAsouwFCFWNhbWJlaXJvcy1ndWVzdC1ob3VzZUgzWANoqQGIAQGYAQm4AQfIAQzYAQPoAQGIAgGoAgO4Atr_jaAGwAIB0gIkMTI2Y2Q5M2EtMmRjYS00N2MyLTgwOTYtM2JhMGZhNWQzOTc22AIE4AIB&sid=2f8a35c7c9845d5f18af8aef4ac3dc1a&dist=0&keep_landing=1&sb_price_type=total&type=total&checkin=2023-05-19&checkout=2023-05-20&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0"
          >
            <img className={styles.hotelImage} src="/224705802.jpg" alt="quarto" />
            <p className={styles.hotelText}>Cambeiros Guesthouse</p>
          </a>

          <div className={styles.multiIconsContainer}>
            <div className={styles.iconContainer}>
              <GiPathDistance className={styles.distanceIcon} /> 5km
            </div>
            <div className={styles.iconContainer}>
              <ImPriceTags className={styles.distanceIcon} /> 150€ p.n.
            </div>
          </div>
          <p className={styles.hotelText} style={{paddingTop : "1rem"}}>Se desejar reservar na quinta na noite do casamento por favor contacte com os noivos.</p>
        </div>
      </section>
    </div>
  );
}
