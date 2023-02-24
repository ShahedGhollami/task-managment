import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </React.Fragment>
);
reportWebVitals();
