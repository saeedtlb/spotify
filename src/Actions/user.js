import SpotifyWebApi from 'spotify-web-api-js';

import { SET_USER, TOGGLE_PLAY } from './types';

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

        const { item } = await spotify.getMyCurrentPlayingTrack();
        data['latest_song'] = {
            id: item.id,
            name: item.name,
            artists: item.artists,
            cover: item.album.images,
        };

        const { playlists } = await spotify.getFeaturedPlaylists({ limit: 6 });
        data['featured'] = playlists.items.map(_playlist => ({
            description: _playlist.description,
            id: _playlist.id,
            image: _playlist.images[0].url,
            name: _playlist.name,
        }));

        return {
            type: SET_USER,
            payload: data,
        };
    } catch (error) {
        console.log(error);
    }
};

export const toggle_play_status = status => ({
    type: TOGGLE_PLAY,
    playing: status,
});
