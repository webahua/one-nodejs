import Head from 'next/head';
import Feature from './Feature';

import Header from './Header';

const Layout = ({children}) => (
<>
    <Head>
        <title>Spyx Phone</title>
    </Head>

    <Header/>
    <Feature/>

    <main >
            <div >{children}</div>
    </main>
    
    
</>
    );
export default Layout;
