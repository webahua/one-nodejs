<<<<<<< HEAD
import Head from 'next/head';
import BroductSteps from './BroductSteps';
import Feature from './Feature';
import Monitor from './Monitor'
import Bottom from './Bottom'
import Header from './Header';
import Banner from './Banner'
import ProductP from './ProductP';
import Testimonials from './Testimonials';
import Bottom2 from './Bottom2';
import { Provider } from 'react-redux'
import store from '../lib'

const Layout = ({children}) => (
<Provider store={store}>
    <Head>
        <title>Film Database</title>
    </Head>

    <Header/>
    <Banner/>
    <Feature/>
    <ProductP/>
    <BroductSteps/>
    <Testimonials/>
    <Monitor/>
    <Bottom2/>
    <Bottom/>

    
</Provider>
    );
=======
import Head from 'next/head';
import BroductSteps from './BroductSteps';
import Feature from './Feature';
import Monitor from './Monitor'
import Bottom from './Bottom'
import Header from './Header';
import Banner from './Banner'
import ProductP from './ProductP';
import Testimonials from './Testimonials';
import Bottom2 from './Bottom2';
import { Provider } from 'react-redux'
import store from '../lib'

const Layout = ({children}) => (
<Provider store={store}>
    <Head>
        <title>Film Database</title>
    </Head>

    <Header/>
    <Banner/>
    <Feature/>
    <ProductP/>
    <BroductSteps/>
    <Testimonials/>
    <Monitor/>
    <Bottom2/>
    <Bottom/>

    
</Provider>
    );
>>>>>>> f8907f6e6a169033ec0202fb4ead9f2d7650ae32
export default Layout;