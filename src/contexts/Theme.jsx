import { createContext, useState } from "react";

const themes = {
    dark: {
        backgroundColor: "black",
        color: "black",
    },
    light: {
        backgroundColor: "white",
        color: "white",
    },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false)
    const theme = isDark ? themes.dark : themes.light;
    const toggleTheme = () => {
        setIsDark(!isDark);
    }
    return(
        <ThemeContext.Provider value={[{ theme, isDark}, toggleTheme]}>{children}</ThemeContext.Provider>
    );
};