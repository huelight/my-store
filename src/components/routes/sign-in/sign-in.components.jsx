import { useEffect } from 'react';
import {gerRedirectResult, getRedirectResult} from 'firebase/auth';

import {
    auth,
    signInWithGooglePoup, 
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
 } from '../../../utilities/firebase/firebase.utilities'

 import SignUp from '../../sign-up-form/sign-up.components'

const SignIn = ()=>{

    //Use Effect For Redirect.
    // useEffect(async ()=>{
    //     const response =await getRedirectResult(auth);
    //     console.log(response);
    //     if (response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, [])

    const logGoogleuser = async ()=>{
        const {user} = await signInWithGooglePoup();
       const userDocRef = await createUserDocumentFromAuth(user)
    }
   
    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleuser}>
                Sign In With Google Pop Up
            </button>
            <SignUp/>
        </div>


    )
}

export default SignIn;