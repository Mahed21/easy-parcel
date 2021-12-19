import initializeAuthentication from "../Firebase/firebase.initial";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const UseFirebase=()=>
{
         const [user,setUser]=useState([]);
         const [error,setError]=useState('');
         const auth = getAuth();
         const provider = new GoogleAuthProvider();
         const googleSignIn=(location,history)=>
            {
             signInWithPopup(auth, provider)
            .then((result) => {
              const user=result.user
             
                    setError('');
                    const destination = location?.state?.from || '/';
                    history.replace(destination);

                
            }).catch((error) => {
                // Handle Errors here.

                setError(error.message);
            });

        }
        const logOut=()=>
        {
            signOut(auth)
            .then(() => {
                setUser({});
              })
              .catch((error) => {
                setError(error.message)
              });
    
        }
        //state change
      useEffect(()=>
      {
        onAuthStateChanged(auth, (user) => {
            if (user) {
            
                setUser(user);
            } 

          });

      },[])
        return{
            googleSignIn,
            error,
            user,
            logOut
            
        }
}
export default UseFirebase;