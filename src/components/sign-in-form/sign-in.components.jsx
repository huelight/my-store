import { useState, } from "react";
import FormInput from "../form-input/form-input.component";
import { 
    signInWithGooglePoup, 
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword } from '../../utilities/firebase/firebase.utilities';
import Button, {Button_Type_Classes} from '../buttons/button.component'
import './sign-in-form.styles.scss';

const SignIn = ()=>{

    const defaultFormFields ={
        email: '',
        password: '',
    }

    const signInWithGoogle = async ()=>{
        await signInWithGooglePoup();
      
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
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
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
            <Button type='button' buttonType = {Button_Type_Classes.google} onClick ={signInWithGoogle}> 
            Google Sign In
            </Button>
            
            </div>

           
        </form>
        </div>
    );
};


export default SignIn;