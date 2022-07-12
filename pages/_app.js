import 'uikit/dist/css/uikit.css'
import '../styles/globals.css'
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return <div>

    <div className="uk-fixed-navigation">
      <nav className="uk-navbar">
        <ul className="uk-navbar-nav">
          <li className="uk-active"><Link href="/">Home</Link></li>
          <li><Link href="/subscribe">Subscribe</Link></li>
        </ul>
      </nav>
    </div>

    <br/>
    <br/>
    <br/>
    <Component {...pageProps} />
  </div>
}

export default MyApp
