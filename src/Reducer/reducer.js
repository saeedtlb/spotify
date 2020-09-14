import { SET_TOKEN } from '../Actions/types';

export const initialState = {
    user: null,
    playing: false,
    playlist: null,
    token: null,
};

export const reducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload,
            };
        default:
            return state;
    }
};
