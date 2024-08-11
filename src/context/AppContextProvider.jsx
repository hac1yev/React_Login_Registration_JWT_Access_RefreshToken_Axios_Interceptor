import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const getColorMode = () => {
        const mode = localStorage.getItem("mode");
        if(mode === "dark") {
            return true
        }else{
            return false
        }
    };

    const [isDark,setIsDark] = useState(getColorMode());

    const values = {
        isDark,
        setIsDark
    };

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
};

AppContextProvider.propTypes = {
    children: PropTypes.node,
};

export default AppContextProvider;