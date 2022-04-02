import React, { Component, createContext } from "react";

export const LanguageContext = createContext();

class LanguageContextProvider extends Component
{
    state = {
        preferredLanguage: "Swiss German",
        writtenLanguage: "Standard German"
    }

    render()
    {
        return(
            <LanguageContext.Provider value={{...this.state}}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

export default LanguageContextProvider;