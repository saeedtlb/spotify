import {
    ERROR,
    TOGGLE_PLAY,
    GET_SONG,
    GET_PLAYLIST_INFO,
    GET_HOME_PLAYLISTS,
    GET_CATEGORIES,
    GET_CATEGORY_PLAYLISTS,
    QRCODE,
} from '../Actions/types';

export const initialState = {
    // song: {},
    // featured: [],
    // playlists: [],
    qr: {
        show: false,
        value: '',
    },
    playing: false,
    song: {
        artists: ['Mohesen yeganeh'],
        name: 'Behet ghol midam',
        url:
            'https://irsv.upmusics.com/Downloads/Musics/Mohsen%20Yeganeh%20-%20Behet%20Ghol%20Midam%20(128).mp3',
    },
    featured: [
        {
            description:
                'Your Ultimate 2007 Mixtape. #SpotifyTBT Cover: Amy Winehouse',
            id: '54343454',
            image:
                'https://i.scdn.co/image/ab67706f000000035641d7bd5341dadcb6332869',
            name: 'Throwback thursday',
        },
    ],
    playlists: [
        { name: 'pop goes classic', id: '1' },
        { name: 'metalica', id: '2' },
        { name: 'coldplay', id: '3' },
        { name: 'AC/DC', id: '4' },
        { name: 'A Star is Born', id: '5' },
    ],
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
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        case GET_CATEGORY_PLAYLISTS:
            return {
                ...state,
                cat_playlists: action.payload,
            };
        case QRCODE:
            return {
                ...state,
                qr: {
                    show: action.payload.status,
                    value: action.payload.txt,
                },
            };
        case ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
