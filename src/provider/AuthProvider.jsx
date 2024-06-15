import { createContext } from "react";
import { app } from "../Firebase/firebase.config";
import { getAuth, signInWithPopup } from "firebase/auth";
import {  GoogleAuthProvider } from "firebase/auth/web-extension";

export const AuthContext = createContext(null);
const auth = getAuth(app)


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
       return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        googleLogin
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;
