import React, { useEffect } from 'react';

import { useUserStateValue } from './components/DataLayer';

import Login from './components/Login';
import Body from './components/home';

const Routes = () => {
    const [{ token }] = useUserStateValue();

    const remove_default_contextmenu = e => e.preventDefault();

    useEffect(() => {
        window.addEventListener('contextmenu', remove_default_contextmenu);

        return () =>
            window.removeEventListener(
                'contextmenu',
                remove_default_contextmenu
            );
    }, []);

    return <>{token ? <Body /> : <Login />}</>;
};

export default Routes;
