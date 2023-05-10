import '@/styles/globals.css'
import '../styles/globals.css'
import Layout from '../../comps/Layout'
import SSRProvider from 'react-bootstrap/SSRProvider';
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({
  Component,
  pageProps,
}) => {
    const getLayout = Component.getLayout || ((page) => page);

  return(
    
    <SSRProvider>
      {getLayout(
        <Layout>
            <Component {...pageProps} />
        </Layout>
      )}
      </SSRProvider>
  )
   
}

export default App;
