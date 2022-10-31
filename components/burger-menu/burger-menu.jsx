import styles from './burger-menu.module.css';

import { FiMenu } from 'react-icons/fi';
import { MdOutlineClose } from 'react-icons/md';

export default function BurgerMenu({ open, setOpen }) {
    return <div>
        <div onClick={() => setOpen(!open)}>
            { !open && <FiMenu className={styles.burger}/> }
            { open && <MdOutlineClose className={styles.burger}/> }
        </div>
        <div className={`${styles.navMenu} ${open ? styles.navMenuOpen : styles.navMenuClose}`}>
            <h1>Menu1</h1>
            <h1>Menu2</h1>
            <h1>Menu3</h1>
            <h1>Menu4</h1>
        </div>
    </div>
}