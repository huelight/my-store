import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
 } from 'firebase/auth';
 import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
 } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_Kdl5DVWmI5URxaH6GJAfq3zHSgrv8qg",
    authDomain: "my-store-db-9d427.firebaseapp.com",
    projectId: "my-store-db-9d427",
    storageBucket: "my-store-db-9d427.appspot.com",
    messagingSenderId: "742603145131",
    appId: "1:742603145131:web:958f1e83befd765fbc1cee"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  
  const googleProvider = new GoogleAuthProvider();
  
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePoup = ()=> signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect =()=> signInWithRedirect(auth, googleProvider);


  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
    ) =>{
    if(!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);
    
    const userSnapshot = await getDoc(userDocRef);
    
    //if user data exists
    if (!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error){
            console.log('error creating the user', error.message);
        }
    }


    //if user data does not exists

    //return
  }

  export const createAuthUserWithEmailAndPassword = async(email, password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  
  export const signInAuthUserWithEmailAndPassword = async(email, password)=>{
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
  }

  export const signOutUser = async ()=> await signOut(auth);

  export const onAuthStateChangeListener = (callback)=> onAuthStateChanged(auth, callback, );

  /**
   * {
   * next: callback
   * }
   */