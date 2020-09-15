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
    playlists: [],
    // playlists: [
    //     { name: 'pop goes classic' },
    //     { name: 'metalica' },
    //     { name: 'coldplay' },
    //     { name: 'AC/DC' },
    //     { name: 'A Star is Born' },
    //     { name: 'Essential classic' },
    //     { name: 'shajarian' },
    //     { name: 'Iran' },
    //     { name: 'weekly' },
    //     { name: 'Jazz' },
    //     { name: 'persian' },
    //     { name: 'Essential classic' },
    //     { name: 'shajarian' },
    //     { name: 'Iran' },
    //     { name: 'weekly' },
    //     { name: 'Jazz' },
    //     { name: 'persian' },
    // ],
    token: null,
    // token:
    //     'BQDr6IIJj6p2iVBjEe0ILc_4qV3MeLBPpgnrcLo1xP0-jUu6Ng…Ig56kci9e-9mddkmeyXZNg5q2MrsYNwxJxLmPZbpVRmuHOj9E',
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
