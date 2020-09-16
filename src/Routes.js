import React from 'react';

import { useStateValue } from './components/DataLayer';

import Login from './components/Login';
import Body from './components/home';

const Routes = () => {
    const [{ token }] = useStateValue();
    return <>{token ? <Body /> : <Login />}</>;
};

export default Routes;
