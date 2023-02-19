import styles from './navigation.module.css';
import { useState } from 'react';

import { FiMenu } from 'react-icons/fi';
import { MdOutlineClose } from 'react-icons/md';

function MenuItems() {
  return (
    <div className={styles.menuItems}>
      <a href="#" className={styles.menuItem}>
        Início
      </a>
      <a href="#" className={styles.menuItem}>
        Lista de Casamento
      </a>
      <a href="#" className={styles.menuItem}>
        Onde Ficar
      </a>
      <a href="#" className={styles.menuItem}>
        RSPV
      </a>
    </div>
  );
}

export default function Navigation() {
  const [menuState, setMenuState] = useState(() => ({
    open: false,
    classes: styles.navMenuClosed,
  }));

  const [menuIndex, setMenuIndex] = useState(-1);

  return (
    <div>
      <div onClick={() => setMenuState({ open: !menuState.open })}>
        {!menuState.open && <FiMenu className={styles.burger} />}
        {menuState.open && <MdOutlineClose className={`${styles.burger} ${styles.burgerOpened}`} />}
      </div>
      <div className={`${styles.navMenu} ${menuState.classes} ${!menuState.open ? styles.navMenuClose : styles.navMenuOpen} ${menuIndex > -1 ? styles[`navMenu-${menuIndex}`] : ''}`}>
        <MenuItems />
        <div className={styles.menuBackgroundPattern} onMouseOver={() => setMenuIndex(-1)} />
        <div className={styles.menuBackgroundImage} />
      </div>
    </div>
  );
}
