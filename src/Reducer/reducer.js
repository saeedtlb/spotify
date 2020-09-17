import { SET_USER, SET_TOKEN, TOGGLE_PLAY } from '../Actions/types';

export const initialState = {
    display_name: null,
    email: null,
    id: null,
    followers: null,
    image: null,
    user: null,
    playing: false,
    latest_song: {},
    featured: [],
    playlists: [],
    // token: null,
    // latest_song: {
    //     artists: [{ name: 'the beatels' }, { name: 'paul mcCaurteny' }],
    //     name: 'yseterday',
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
    token:
        'BQDr6IIJj6p2iVBjEe0ILc_4qV3MeLBPpgnrcLo1xP0-jUu6Ng…Ig56kci9e-9mddkmeyXZNg5q2MrsYNwxJxLmPZbpVRmuHOj9E',
};

export const reducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case SET_TOKEN:
            return { ...state, token: action.token };
        case SET_USER:
            return {
                ...state,
                ...action.payload,
            };
        case TOGGLE_PLAY:
            return {
                ...state,
                playing: action.playing,
            };
        default:
            return state;
    }
};
