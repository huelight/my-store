import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { 
    signInWithGooglePoup, 
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword } from '../../utilities/firebase/firebase.utilities';
import Button from '../buttons/button.component'
import './sign-in-form.styles.scss';

const SignIn = ()=>{

    const defaultFormFields ={
        email: '',
        password: '',
    }

    const signInWithGoogle = async ()=>{
        const {user} = await signInWithGooglePoup();
       await createUserDocumentFromAuth(user)
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    
    const {email, password,} = formFields;
    
    const resetFormFields =()=>{
        setFormFields(defaultFormFields)
    };

    //Form Submission Handler
    const handleSubmit = async (event)=>{
        event.preventDefault();
       
        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response)
            resetFormFields();

            // console.log(response)
        } catch(error){
            switch(error.code){
                case 'auth/wrong-password': alert('Incorrect Password For Email');
                break;
                case  'auth/user-not-found': alert('No user associated with this email');
                break;
                default: console.log(error);
            }

            // if(error.code == 'auth/wrong-password'){
            //     alert('Incorrect Password For Email')
            // } else if (error.code == 'auth/user-not-found'){

            // }
        }
    }
    
    const handleChange = (event)=>{
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }
    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign In With Your Email and Password</span>
        <form onSubmit={handleSubmit}>

            <FormInput
            label = 'Email'
            type='email' 
            required 
            onChange={handleChange} 
            name='email'
            value={email} />

            <FormInput
            label ='Password'
            type='password' 
            required 
            onChange={handleChange} 
            name='password'
            value={password} />

            <div className="buttons-container">
            <Button type = 'submit'> Sign In</Button>
            
            {/* Google Sign In Button*/}
            <Button type='button' buttonType = 'google' onClick ={signInWithGoogle}> 
            Google Sign In
            </Button>
            
            </div>

           
        </form>
        </div>
    );
};


export default SignIn;