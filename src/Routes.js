import React from 'react';

import { useStateValue } from './components/DataLayer';

import Login from './components/Login';
import Home from './components/home/Home';

const Routes = () => {
    const [{ token }] = useStateValue();
    console.log(token);
    return <>{token ? <Home /> : <Login />}</>;
};

export default Routes;
