import React from 'react';

import { Route } from 'react-router-dom';

import Auth from './HOC/Auth';

import Login from './components/Login';

const Routes = () => {
    return (
        <>
            <Route path='/' exact component={Auth(Login)} />
        </>
    );
};

export default Routes;
