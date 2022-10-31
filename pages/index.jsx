import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from "react";

import BurgerMenu from '../components/burger-menu/burger-menu';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Soraia & João</title>
        <meta name="description" content="Casamento Soraia & João" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BurgerMenu open={open} setOpen={setOpen}/>
      <h1>Hello World</h1>
    </div>
  )
}
