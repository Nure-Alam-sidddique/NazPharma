import {
    FacebookAuthProvider, getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser]= useState({});
    const [error, setError ]= useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvier = new FacebookAuthProvider();
    const signInUsingGoogle = () => {
      return  signInWithPopup(auth, googleProvider);
    }
    // console.log(user);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, []);

    const signInUsingGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }
    const signInUsingFacebook = () => {
        return signInWithPopup(auth, facebookProvier);
    }
    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch(error => setError(error.message));
    }
    return {
      user,
      error,
      signInUsingGoogle,
      logout,
      signInUsingGithub,
      signInUsingFacebook,
    };

}
export default useFirebase;