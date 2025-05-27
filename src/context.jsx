import {useState, useContext, createContext} from 'react';


const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
      const ToggleTheme= () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
      }
      return(
        <AppContext.Provider value={{isDarkTheme, ToggleTheme}}>
            {children}
        </AppContext.Provider>
      )
}
export const useGlobalContext = () => useContext(AppContext);