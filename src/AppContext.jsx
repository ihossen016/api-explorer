import { createContext, useReducer } from "react";

const initialState = [];

const AppContext = createContext();

const appReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "REMOVE":
            return state.filter((item, index) => index != action.payload);
        default:
            return state;
    }
};

const AppProvider = ({ children }) => {
    const [histories, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ histories, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
