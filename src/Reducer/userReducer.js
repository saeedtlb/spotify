import { SET_USER } from '../Actions/types';

export const initialState = {
    display_name: null,
    email: null,
    id: null,
    followers: null,
    image: null,
    user: null,
    token: null,
    // display_name: 'saeed tlb',
    // token: 'BQDr685dfd52245',
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
