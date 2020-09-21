import React, { createContext, useContext, useReducer } from 'react';

// import { initialState, reducer } from '../Reducer/songReducer';
import {
    initialState as user_initial,
    userReducer,
} from '../Reducer/userReducer';
import {
    initialState as song_initial,
    songReducer,
} from '../Reducer/songReducer';

const DataLayerUser = createContext(user_initial);
const DataLayerSong = createContext(song_initial);

export const UserDataLayerProvider = ({ children }) => (
    <DataLayerUser.Provider value={useReducer(userReducer, user_initial)}>
        {children}
    </DataLayerUser.Provider>
);

export const SongDataLayerProvider = ({ children }) => (
    <DataLayerSong.Provider value={useReducer(songReducer, song_initial)}>
        {children}
    </DataLayerSong.Provider>
);

export const useUserStateValue = () => useContext(DataLayerUser);
export const useSongStateValue = () => useContext(DataLayerSong);
