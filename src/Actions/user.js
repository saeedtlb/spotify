import SpotifyWebApi from 'spotify-web-api-js';

import { SET_USER } from './types';

import { setCookie } from '../components/utils/cookie';

const spotify = new SpotifyWebApi();

export const getToken = async token => {
    spotify.setAccessToken(token);
    const user = await spotify.getMe();

    setCookie('_token', token);

    let data = {
        display_name: user.display_name,
        email: user.email,
        followers: user.followers.href,
        id: user.id,
        image: user.images[0],
        token,
    };

    return {
        type: SET_USER,
        payload: data,
    };
};
