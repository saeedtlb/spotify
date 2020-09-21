import React from 'react';
import ReactDOM from 'react-dom';

import './Resources/Css/index.css';

import { UserDataLayerProvider } from './components/DataLayer';
import Routes from './Routes';

ReactDOM.render(
    <UserDataLayerProvider>
        <Routes />
    </UserDataLayerProvider>,
    document.getElementById('root')
);
