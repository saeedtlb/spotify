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
    // song: {},
    // featured: [],
    recently: [],
    // playlists: [],
    qr: {
        show: false,
        value: null,
    },
    playing: false,
    // recently: [
    //     {
    //         id: '454545',
    //         url: '',
    //         name: 'the last of us part || (original sound track)',
    //         artists: ['gustavo santaolalla, mac Quayle'],
    //         type: 'album',
    //         image:
    //             'https://i.scdn.co/image/ab67616d00001e026582b0de8c4acde5f02f4f51',
    //         link: '',
    //     },
    // ],
    song: {
        artists: ['gustavo santaolalla, mac Quayle'],
        name: 'the last of us part || (original sound track)',
        cover: [
            {
                url:
                    'https://i.scdn.co/image/5a73a056d0af707b4119a883d87285feda543fbb',
                width: '64px',
                height: '64px',
            },
            {
                url:
                    'https://i.scdn.co/image/107819f5dc557d5d0a4b216781c6ec1b2f3c5ab2',
                width: '300px',
                height: '300px',
            },
        ],
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
