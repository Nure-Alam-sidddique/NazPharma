import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser]= useState({});
    const [error, setError] = useState('');
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvier = new FacebookAuthProvider();
    const signInUsingGoogle = () => {
      return  signInWithPopup(auth, googleProvider);
    }
    // console.log(user);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const signInUsingGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }
    const signInUsingFacebook = () => {
        return signInWithPopup(auth, facebookProvier);
    }
     
    const registerUserEmailPassword = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
            
    }
    const signInEmailPassword = (email, password) => {
     return signInWithEmailAndPassword(auth, email, password);
    }
    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser);
    }
    
    const passwordReset = (email) => {
     return   sendPasswordResetEmail(auth, email);
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
     registerUserEmailPassword,
        signInEmailPassword,
        emailVerify,
        passwordReset
    };

}
export default useFirebase;