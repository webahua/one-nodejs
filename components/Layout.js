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

const Layout = ({children}) => (
<>
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

    
</>
    );
export default Layout;