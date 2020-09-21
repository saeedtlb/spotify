import { SET_USER } from '../Actions/types';

export const initialState = {
    display_name: null,
    email: null,
    id: null,
    followers: null,
    image: null,
    user: null,
    token: null,
    // token:
    //     'BQDr6IIJj6p2iVBjEe0ILc_4qV3MeLBPpgnrcLo1xP0-jUu6Ng…Ig56kci9e-9mddkmeyXZNg5q2MrsYNwxJxLmPZbpVRmuHOj9E',
};

export const userReducer = (state = initialState, action) => {
    console.log('user', action);

    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
