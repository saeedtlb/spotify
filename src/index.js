import React from 'react';
import ReactDOM from 'react-dom';

import './Resources/Css/index.css';

import { DataLayerProvider } from './components/DataLayer';
import Routes from './Routes';

ReactDOM.render(
    <DataLayerProvider>
        <Routes />
    </DataLayerProvider>,
    document.getElementById('root')
);
