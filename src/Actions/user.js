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
            token,
        };

        // const playlist = await spotify.getUserPlaylists();
        // data['playlists'] = playlist.items.map(_play => {
        //     return {
        //         id: _play.id,
        //         image: _play.images[0].url,
        //         name: _play.name,
        //         tracks: _play.tracks.href,
        //         href: _play.href,
        //     };
        // });

        // const { items } = await spotify.getMyRecentlyPlayedTracks({ limit: 1 });
        // data['song'] = {
        //     id: items[0].track.id,
        //     name: items[0].track.name,
        //     artists: items[0].track.artists.map(artist => artist.name),
        //     cover: items[0].track.album.images[2],
        // };

        // const { playlists } = await spotify.getFeaturedPlaylists({ limit: 6 });
        // data['featured'] = playlists.items.map(_playlist => ({
        //     description: _playlist.description,
        //     id: _playlist.id,
        //     image: _playlist.images[0].url,
        //     name: _playlist.name,
        // }));

        return {
            type: SET_USER,
            payload: data,
        };
    } catch (error) {
        console.log(error);
    }
};

// export const toggle_play_status = status => ({
//     type: TOGGLE_PLAY,
//     playing: status,
// });

// export const get_song = async id => {
//     try {
//         const data = await spotify.getTrack(id);
//         const song = !data
//             ? 'no song'
//             : {
//                   name: data.name,
//                   cover: data.album.images[2],
//                   url: data.preview_url,
//               };

//         return {
//             type: GET_SONG,
//             payload: song,
//         };
//     } catch (err) {
//         console.log(err);
//     }
// };
