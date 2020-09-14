import React from 'react';
import ReactDOM from 'react-dom';

import { DataLayerProvider } from './components/DataLayer';
import { BrowserRouter, Switch } from 'react-router-dom';
import Routes from './Routes';

ReactDOM.render(
    <DataLayerProvider>
        <BrowserRouter>
            <Switch>
                <Routes />
            </Switch>
        </BrowserRouter>
    </DataLayerProvider>,
    document.getElementById('root')
);
