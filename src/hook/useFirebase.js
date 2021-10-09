import { GoogleAuthProvider,getAuth,signInWithPopup } from "firebase/auth";
import { useState } from "react";

import initializeAuthentication from "../Firease/firebase.init"
initializeAuthentication();
const useFirebase = ()=>{
    const [user,setUser] = useState({})
    const [error,setError] = useState('')
    const googleProvider = new GoogleAuthProvider();
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
    return{
        user,
        error,
        signInWithGoogle
    }
}
export default useFirebase;