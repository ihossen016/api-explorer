import { createContext, useReducer } from "react";

const prevHistories = localStorage.getItem("api-explorer-histories");
const initialState = prevHistories ? JSON.parse(prevHistories) : [];

const AppContext = createContext();

const appReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const updatedHistories = [...state, action.payload].slice(-5);
            localStorage.setItem(
                "api-explorer-histories",
                JSON.stringify(updatedHistories)
            );

            return updatedHistories;

        case "REMOVE":
            const newHistories = state.filter(
                (item, index) => index != action.payload
            );
            localStorage.setItem(
                "api-explorer-histories",
                JSON.stringify(newHistories)
            );

            return newHistories;

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
