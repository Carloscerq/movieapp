//CSS
import '../styles/Header.css';
import '../styles/globals.css';
import '../styles/Footer.css';
import '../styles/Author.css';
import '../styles/Home.css';
import '../styles/Item.css';
import '../styles/Search.css';
//Redux
import reduxWrapper from '../redux';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default reduxWrapper.withRedux(MyApp);