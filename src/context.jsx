import {useState, useContext, createContext} from 'react';


const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
      const ToggleTheme= () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);

        const body=document.querySelector('body');
        body.classList.toggle('dark-theme')
        console.log(body)
      }
      return(
        <AppContext.Provider value={{isDarkTheme, ToggleTheme}}>
            {children}
        </AppContext.Provider>
      )
}
export const useGlobalContext = () => useContext(AppContext);