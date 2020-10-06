import SpotifyWebApi from 'spotify-web-api-js';

import {
    ERROR,
    GET_HOME_PLAYLISTS,
    GET_SONG,
    TOGGLE_PLAY,
    GET_PLAYLIST_INFO,
    GET_CATEGORIES,
    GET_CATEGORY_PLAYLISTS,
    QRCODE,
} from './types';

const spotify = new SpotifyWebApi();

export const get_Home_Playlists = async () => {
    let data = {};
    const playlist = await spotify.getUserPlaylists();
    data['playlists'] = playlist.items.map(_play => {
        return {
            id: _play.id,
            image: _play.images[0].url,
            name: _play.name,
        };
    });

    const { items } = await spotify.getMyRecentlyPlayedTracks({ limit: 1 });
    data['song'] = {
        id: items[0].track.id,
        name: items[0].track.name,
        artists: items[0].track.artists.map(artist => artist.name),
        cover: items[0].track.album.images[2],
    };

    const { playlists } = await spotify.getFeaturedPlaylists({ limit: 6 });
    data['featured'] = playlists.items.map(_playlist => ({
        description: _playlist.description,
        id: _playlist.id,
        image: _playlist.images[0].url,
        name: _playlist.name,
    }));

    return {
        type: GET_HOME_PLAYLISTS,
        payload: data,
    };
};

export const recently_played = async () => {
    const { items } = await spotify.getMyRecentlyPlayedTracks({ limit: 5 });
    console.log(items);
    // data['recently'] = items.map(song => ({
    //     id: song.track.id,
    //     url: song.track.preview_url,
    //     name: song.track.name,
    //     artists: song.track.artists.map(artist => artist.name),
    //     type: song.track.type,
    // }));
};

export const toggle_play_status = status => ({
    type: TOGGLE_PLAY,
    playing: status,
});

export const get_song = async id => {
    try {
        const data = await spotify.getTrack(id);
        const song = !data
            ? 'no song'
            : {
                  name: data.name,
                  cover: data.album.images[2],
                  url: data.preview_url,
                  artists: data.artists.map(artist => artist.name),
                  link: data.external_urls.spotify,
              };

        return {
            type: GET_SONG,
            payload: song,
        };
    } catch (err) {
        console.log(err);
    }
};

export const get_Playlist_info = async id => {
    try {
        const { name, tracks, images } = await spotify.getPlaylist(id);
        const data = {
            name,
            images,
            tracks: tracks.items.map(_track => ({
                id: _track.track.id,
                added: _track.added_at,
                name: _track.track.name,
                artists: _track.track.artists.map(artist => artist.name),
            })),
        };

        return {
            type: GET_PLAYLIST_INFO,
            payload: data,
        };
    } catch (err) {
        console.log('song action(get_playlist_info)', err);
    }
};

export const clear_playlist_info = () => ({
    type: GET_PLAYLIST_INFO,
    payload: {},
});

export const get_categories = async () => {
    const { categories } = await spotify.getCategories();
    const _categories = categories.items.map(category => ({
        icon: category.icons[0].url,
        name: category.name,
        id: category.id,
    }));

    return {
        type: GET_CATEGORIES,
        payload: _categories,
    };
};

export const get_category_playlists = async id => {
    const { playlists } = await spotify.getCategoryPlaylists(id);

    console.log(444, playlists);

    const data = playlists.items.map(playlist => ({
        name: playlist.name,
        id: playlist.id,
        image: playlist.images[0].url,
        description: playlist.description,
    }));

    console.log(111, data);

    return {
        type: GET_CATEGORY_PLAYLISTS,
        payload: data,
    };
};

export const qrCode = (status, txt = null) => ({
    type: QRCODE,
    payload: {
        status,
        txt,
    },
});
