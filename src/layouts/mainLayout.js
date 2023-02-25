// @flow
import React, { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar'
const Topbar = React.lazy(() => import('../components/Topbar'));
const Footer = React.lazy(() => import('../components/Footer'));
const Alert = React.lazy(() => import('../components/AlertNotification'));
const LoaderPage = React.lazy(() => import('../components/Loader'));
// loading
const emptyLoading = () => <div></div>;
const loading = () => <div className="text-center"></div>;
const MainLayout =(props)=> {
        
        const children = props.children || null
        return (
            <div className="app">
                <div id="wrapper">                   
                    <Suspense fallback={emptyLoading()}>
                        <Topbar {...props} />
                    </Suspense>
                    <PerfectScrollbar>
                    <div className="content-page" style={{ backgroundColor: '#FFF' }}>                   
                        <div className="content">
                            <Container fluid>
                                <Suspense fallback={loading()}>
                                    {(props.Section.loading || props.Task.loading  ) &&<LoaderPage />}
                                    <Alert />
                                    {children}
                                </Suspense>
                            </Container>
                        </div>
                        <Suspense fallback={emptyLoading()}>
                            <Footer {...props} />
                        </Suspense>
                    </div>
                    </PerfectScrollbar>
                </div>
            </div>
        );
    }

const mapStateToProps = state => {
    return {
        Task: state.Task,
        Section: state.Section,
      
    };
}
export default connect(mapStateToProps, { })(MainLayout);