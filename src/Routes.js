import React, { useEffect } from 'react';

import { useUserStateValue } from './components/DataLayer';

import Login from './components/Login';
import Body from './components/home';

const Routes = () => {
    const [{ token }] = useUserStateValue();

    // useEffect(() => {
    // window.addEventListener('contextmenu', e => e.preventDefault());

    // return () => window.removeEventListener('contextmenu');
    // });

    return <>{token ? <Body /> : <Login />}</>;
};

export default Routes;
