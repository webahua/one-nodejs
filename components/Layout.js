import Head from 'next/head';
import BroductSteps from './BroductSteps';
import Feature from './Feature';
import Monitor from './Monitor'
import Bottom from './Bottom'
import Header from './Header';
import ProductP from './ProductP';
import Testimonials from './Testimonials';

const Layout = ({children}) => (
<>
    <Head>
        <title>Film Database</title>
    </Head>

    <Header/>
    <Feature/>
    <ProductP/>
    <BroductSteps/>
    <Testimonials/>
    <Monitor/>
    <Bottom/>
    

    <main >
            <div >{children}</div>
    </main>
    
    
</>
    );
export default Layout;
