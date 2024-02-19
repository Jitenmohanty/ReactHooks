import { useContext, createContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider

// Add custom hooks for dealing the contextApi

export const useTheme = ()=>{
    return useContext(ThemeContext)
}
