import '../styles/globals.css'
// import Navigation from '../components/navigation/navigation';
import Menu from '../components/menu/menu';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Menu/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
