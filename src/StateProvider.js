import React, { createContext, useContext, useReducer } from "react";

// PREPARING DATA LAYER
export const StateContext = createContext();

//HIGHER ORDER COMPONENT
//children is referring to 'App'
// initialState - what data layer looks like when data is loaded.
// reducer - listens to changes that will be needed for data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);
