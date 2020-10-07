import {
    TOGGLE_PLAY,
    GET_SONG,
    GET_PLAYLIST_INFO,
    GET_HOME_PLAYLISTS,
    GET_CATEGORIES,
    RECENTLY_PLAYED,
    GET_CATEGORY_PLAYLISTS,
    QRCODE,
} from '../Actions/types';

export const initialState = {
    song: {},
    featured: [],
    recently: [],
    playlists: [],
    qr: {
        show: false,
        value: null,
    },
    playing: false,
};

export const songReducer = (state = initialState, action) => {
    // console.log('song', action);

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
                qr: {
                    show: false,
                    value:
                        typeof action.payload === 'object'
                            ? action.payload.name
                            : null,
                },
            };
        case GET_HOME_PLAYLISTS:
            const { featured, song, playlists } = action.payload;
            return {
                ...state,
                featured,
                song,
                playlists,
                qr: {
                    show: false,
                    value: song.name,
                },
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
        case RECENTLY_PLAYED:
            return {
                ...state,
                recently: action.payload,
            };
        case QRCODE:
            return {
                ...state,
                qr: {
                    show: action.payload.status,
                    value: action.payload.txt
                        ? action.payload.txt
                        : state.song.name,
                },
            };
        default:
            return state;
    }
};
