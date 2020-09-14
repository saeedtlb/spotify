import SpotifyWebApi from 'spotify-web-api-js';

import { SET_USER } from './types';

const spotify = new SpotifyWebApi();

export const getToken = async token => {
    try {
        spotify.setAccessToken(token);
        const user = await spotify.getMe();

        let data = {
            display_name: user.display_name,
            email: user.email,
            followers: user.followers.href,
            id: user.id,
            image: user.images[0],
        };

        const playlist = await spotify.getUserPlaylists();
        data['playlists'] = playlist.items.map(_play => {
            return {
                id: _play.id,
                image: _play.images[0].url,
                name: _play.name,
                tracks: _play.tracks.href,
                href: _play.href,
            };
        });

        return {
            type: SET_USER,
            payload: data,
        };
    } catch (error) {
        console.log(error);
    }
};
