import styles from './menu.module.css';

// import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, Fragment } from 'react';

import { FiMenu } from 'react-icons/fi';
import { MdOutlineClose } from 'react-icons/md';

export default function Menu() {
  const { asPath } = useRouter();
  const [menuState, setMenuState] = useState(() => ({
    open: false,
    classes: styles.burgerMenuClosed,
  }));

  const Menus = () => (
    <Fragment>
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
    </Fragment>
  );

  return (
    <nav>
      <section>
        <h1 className={styles.title}>Soraia & João</h1>
        <div onClick={() => setMenuState({ open: !menuState.open })}>
          {!menuState.open && <FiMenu className={styles.burger} />}
          {menuState.open && <MdOutlineClose className={`${styles.burger} ${styles.burgerOpened}`} />}
        </div>
        <div className={styles.navigationContainer}>
          <div className={styles.line} />
          <Menus />
          <div className={styles.line} />
        </div>
        <div className={`${styles.burgerMenu} ${menuState.classes} ${!menuState.open ? styles.navMenuClose : styles.navMenuOpen}`}>
          <Menus />
        </div>
      </section>
    </nav>
  );
}
