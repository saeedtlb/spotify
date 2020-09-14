import React from 'react';

import { useStateValue } from '../components/DataLayer';

// import Loading from '../components/Loading';

const Auth = (ComposedComponent, needAuth = false) => {
    const [{ user }, dispatch] = useStateValue();

    return (
        <>
            <ComposedComponent />
            {/* {!needAuth ? (
                <h2>come 1</h2>
            ) : user ? (
                <h2>come 2</h2>
            ) : (
                <h1>loading...</h1>
            )} */}
        </>
    );
};

export default Auth;
