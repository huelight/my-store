import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utilities/firebase/firebase.utilities.js";

export const CategoriesContext = createContext({
    categoriesMap: {},

});

export const CategoriesProvider = ({children}) =>{
    const [categoriesMap, setCategoriesMap] = useState({});
    //After adding code in firebase, add use Effect Code to add to DB
    // useEffect(()=>{
    //     addCollectioAndDocument('categories', SHOP_DATA)
    // }, [])
    useEffect(()=>{
        const getCategoriesMap = async()=>{
       const categoryMap = await getCategoriesAndDocuments();
       console.log(categoryMap);
       setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
    }, [])
    const value = {categoriesMap};
    return(
        <CategoriesContext.Provider value ={value}>
            {children}
        </CategoriesContext.Provider>
    )
}