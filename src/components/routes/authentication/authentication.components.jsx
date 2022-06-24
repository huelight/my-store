import { useEffect } from 'react';
import {gerRedirectResult, getRedirectResult} from 'firebase/auth';

import {
    auth,
    signInWithGooglePoup, 
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
 } from '../../../utilities/firebase/firebase.utilities'

 import SignUp from '../../sign-up-form/sign-up.components'
 import SignIn from '../../sign-in-form/sign-in.components'

const Authentication = ()=>{

    //Use Effect For Redirect.
    // useEffect(async ()=>{
    //     const response =await getRedirectResult(auth);
    //     console.log(response);
    //     if (response){
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, [])
   
    return(
        <div>
            <SignIn />
            <SignUp/>
        </div>


    )
}

export default Authentication;