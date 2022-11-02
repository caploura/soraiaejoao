import Head from 'next/head'
import HomePage from './home';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Soraia & João - Página Inicial</title>
        <meta name="description" content="Casamento Soraia & João" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage/>
    </div>
  )
}
