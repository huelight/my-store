 import SignUp from '../../sign-up-form/sign-up.components'
 import SignIn from '../../sign-in-form/sign-in.components'
 import './authenticatio.styles.scss'

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
        <div className='authentication-container'>
            <SignIn />
            <SignUp/>
        </div>


    )
}

export default Authentication;