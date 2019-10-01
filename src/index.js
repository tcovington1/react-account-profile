import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import AccountProvider from './providers/AccountProvider';
import ItemProvider from './providers/ItemProvider';

ReactDOM.render(
  <AccountProvider>
    <ItemProvider>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </ItemProvider>
  </AccountProvider>,
  document.getElementById('root')
);

