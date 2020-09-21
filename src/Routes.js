import React from 'react';

import { useUserStateValue } from './components/DataLayer';

import Login from './components/Login';
import Body from './components/home';

const Routes = () => {
    const [{ token }] = useUserStateValue();

    return <>{token ? <Body /> : <Login />}</>;
};

export default Routes;
