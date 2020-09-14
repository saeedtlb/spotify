import React, { useEffect } from 'react';

import '../Resources/Css/Login.css';

import { accessUrl } from './utils/spotify';
import { useStateValue } from './DataLayer';

import { SET_TOKEN } from '../Actions/types';
import { getToken } from '../Actions/user';

const Login = ({ location, history }) => {
    const [{ token }, dispatch] = useStateValue();

    useEffect(() => {
        const _token = location.hash.slice(1).split('&')[0].split('=')[1];
        if (_token) {
            window.location.hash = '';
            dispatch({ type: SET_TOKEN, token: _token });
            getToken(_token).then(data => {
                dispatch(data);
            });
        }
    }, [token, dispatch]);

    return (
        <div className='login'>
            <object data='/Images/spotify.jpg' type='image/jpg'>
                <img
                    src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
                    alt='Spotify'
                />
            </object>
            <a href={accessUrl}>log in to spotify</a>
        </div>
    );
};

export default Login;
