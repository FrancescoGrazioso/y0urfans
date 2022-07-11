import 'uikit/dist/css/uikit.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
    //TODO aggiungere navbar
    <Component {...pageProps} />
  </div>
}

export default MyApp
