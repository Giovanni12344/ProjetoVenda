import { createContext, useContext, useState } from "react";
import { isLogged, getUser } from "../lib/AuthHandler";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initialLoggedState = isLogged();
    const initialUserState = initialLoggedState ? getUser() : null;

    const [Logged, setLogged] = useState(initialLoggedState);
    const [user, setUser] = useState(initialUserState);

    return (
        <AuthContext.Provider value={{ Logged, user, setLogged,  setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () =>  useContext(AuthContext);