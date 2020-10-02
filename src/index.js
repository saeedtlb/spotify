import React from 'react';
import ReactDOM from 'react-dom';

import './Resources/Css/index.css';

import { UserDataLayerProvider } from './components/DataLayer';
import Main from './Main';

ReactDOM.render(
    <UserDataLayerProvider>
        <Main />
    </UserDataLayerProvider>,
    document.getElementById('root')
);
