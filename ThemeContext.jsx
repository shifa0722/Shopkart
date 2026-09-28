import { createContext, useReducer } from "react";

export const ThemeContext =createContext();

function themeReducer (state ,action) {
    switch (action.type) {
        case "toggle" : return state === "light" ? "dark" : "light";
        default :return state;
    }
}

export function ThemeProvider({children}){
    const [state ,dispatch] = useReducer (themeReducer, "light");

    return (
        <ThemeContext.Provider value={{state ,dispatch}}>
            {children}
        </ThemeContext.Provider>
    );
}