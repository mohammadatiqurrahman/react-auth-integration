import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut,GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../Firease/firebase.init"
initializeAuthentication();
const useFirebase = ()=>{
    const [user,setUser] = useState({})
    const [error,setError] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const auth = getAuth();

    const signInWithGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    const signInWithGithub=()=>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    const logOut =()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                console.log('inside user',user);
                setUser(user)
            }
        })
    },[])
    return{
        user,
        error,
        logOut,
        signInWithGoogle,
        signInWithGithub
    }}
export default useFirebase;