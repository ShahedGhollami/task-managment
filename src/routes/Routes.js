import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary'
import { getLayout } from '../layouts/LayoutContainers';
const Index = React.lazy(() => import('../pages/index'));
const RoutesList=(props)=> {  
    const Layout = getLayout(); 
        return <BrowserRouter>
            <ErrorBoundary>
                <Layout {...props}>
                    <Switch >
                    <Route path='/' component={Index} />                       
                    </Switch >
                </Layout>
            </ErrorBoundary>
        </BrowserRouter>
    
}
export default RoutesList;
