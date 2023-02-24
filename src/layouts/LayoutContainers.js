import React from 'react';
import Loadable from 'react-loadable';
const loading = () => <div></div>;
export const Layout = Loadable({
    loader: () => import('./mainLayout'),
    render(loaded, props) {
        let Component = loaded.default;
        return <Component {...props} />;
    },
    loading,
});
export const getLayout = () => {   
    return Layout;
}