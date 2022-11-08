import styles from './menu.module.css';

// import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Menu() {
  const { asPath } = useRouter();
  console.log(asPath);

  return (
    <nav>
      <section>
        <h1 className={styles.title}>Soraia & João</h1>
        <div className={styles.navigationContainer}>
          <div className={styles.line} />
          <a href={'/'} className={`${styles.menuItem} ${asPath === '/' ? styles.activeMenu : styles.nonActiveMenu}`}>
            Início
          </a>
          <a href={'/invite'} className={`${styles.menuItem} ${asPath === '/invite' ? styles.activeMenu : styles.nonActiveMenu}`}>
            Convite
          </a>
          <a href={'/stay'} className={`${styles.menuItem} ${asPath === '/stay' ? styles.activeMenu : styles.nonActiveMenu}`}>
            Onde Ficar
          </a>
          <a href={'/rspv'} className={`${styles.menuItem} ${asPath === '/rspv' ? styles.activeMenu : styles.nonActiveMenu}`}>
            RSPV
          </a>
          <div className={styles.line} />
        </div>
      </section>
    </nav>
  );
}
