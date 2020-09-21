import {
    TOGGLE_PLAY,
    GET_SONG,
    GET_PLAYLIST_INFO,
    GET_HOME_PLAYLISTS,
} from '../Actions/types';

export const initialState = {
    song: {},
    featured: [],
    playlists: [],
    playing: false,
    // song: {
    //     artists: [{ name: 'the beatels' }, { name: 'paul mcCaurteny' }],
    //     name: 'yseterday',
    //     prv:
    //         'https://p.scdn.co/mp3-preview/cf95a6afa9293703378765c0da5e162cb1dced85?cid=5c15d7c30b744d5b8f8e435f01c9f405',
    // },
    // featured: [
    //     {
    //         description:
    //             'Your Ultimate 2007 Mixtape. #SpotifyTBT Cover: Amy Winehouse',
    //         id: '54343454',
    //         image:
    //             'https://i.scdn.co/image/ab67706f000000035641d7bd5341dadcb6332869',
    //         name: 'Throwback thursday',
    //     },
    // ],
    // playlists: [
    //     { name: 'pop goes classic' },
    //     { name: 'metalica' },
    //     { name: 'coldplay' },
    //     { name: 'AC/DC' },
    //     { name: 'A Star is Born' },
    // ],
};

export const songReducer = (state = initialState, action) => {
    console.log('song', action);

    switch (action.type) {
        case TOGGLE_PLAY:
            return {
                ...state,
                playing: action.playing,
            };
        case GET_SONG:
            return {
                ...state,
                song: action.payload,
            };
        case GET_HOME_PLAYLISTS:
            const { featured, song, playlists } = action.payload;
            return {
                ...state,
                featured,
                song,
                playlists,
            };
        case GET_PLAYLIST_INFO:
            return {
                ...state,
                playlist_info: action.payload,
            };
        default:
            return state;
    }
};