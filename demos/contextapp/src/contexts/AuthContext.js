import React, { Component, createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component
{
    state = {
        isAuthenticated: false,
        anotherProperty: "geronimo"
    }

    render()
    {
        return(
            <AuthContextProvider value={{...this.state}}>
                {this.props.children}
            </AuthContextProvider>
        );
    }
}

export default AuthContextProvider;