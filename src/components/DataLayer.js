import React, { createContext, useContext, useReducer } from 'react';

import { initialState, reducer } from '../Reducer/reducer';

const DataLayer = createContext(initialState);

export const DataLayerProvider = ({ children }) => (
    <DataLayer.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayer.Provider>
);

export const useStateValue = () => useContext(DataLayer);
