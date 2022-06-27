import { createContext, useState, useEffect } from "react";



/*
product{
    id,
    name,
    price,
    imageUrl
}
Cart Item{
    id,
    name,
    price,
    imageUrl,
    quantity
}

*/
const addCartItem = (cartItems, productToAdd) =>{
    //find if cart item contains product to add
    const exisitingCartItem = cartItems.find(
        (cartItem)=> cartItem.id === productToAdd.id);

    //if found, increment quantity
        if(exisitingCartItem){
            return(
                cartItems.map((cartItem)=> cartItem.id === productToAdd.id ?
                {...cartItem, quantity: cartItem.quantity + 1}: cartItem )
            );
        }
    //return new array with modified cartItems/ new cart item
    return[...cartItems, {...productToAdd, quantity: 1}];
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: ()=>{},
    cartItem: [],
    addItemToCart: ()=>{},
    removeItemFromCart: ()=>{},
    clearItemFromCart: ()=>{},
    cartCount: 0,
    cartTotal: 0,
})


//Remove Item From Cart Function
const removeCartItem = (cartItems, cartItemToRemove)=>{
    //find the cart item to remove
    const exisitingCartItem = cartItems.find(
        (cartItem)=> cartItem.id === cartItemToRemove.id);
    //check if quantity is equal to one, if it is, remove that item from the cart
    if(exisitingCartItem.quantity === 1){
        return cartItems.filter(cartItem=> cartItem.id !== cartItemToRemove.id);
    }
    //return back cart items with matching cartitem with reduced quantity
        return(
            cartItems.map((cartItem)=> cartItem.id === cartItemToRemove.id ?
            {...cartItem, quantity: cartItem.quantity - 1}: cartItem )
        );

}

const clearCartItem = (cartItems, cartItemToClear)=>{
    return cartItems.filter((cartItem)=> cartItem.id !== cartItemToClear.id);
}



export const CartProvider =({children})=>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    const [cartItems, setCartItems]= useState([]);

    const [cartCount, setCartCount]= useState(0);

    const [cartTotal, setCartTotal]= useState(0);

    
    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems]);

    useEffect(()=>{
        const newCartTotal = cartItems.reduce(
            (total, cartItem)=> total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal)
    }, [cartItems]);

    const addItemToCart =(productToAdd) =>{
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeItemFromToCart =(cartItemToRemove) =>{
        setCartItems(removeCartItem( cartItems, cartItemToRemove))
    }

    const clearItemFromCart =(cartItemToClear) =>{
        setCartItems(clearCartItem( cartItems, cartItemToClear))
    }


    const value = {
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        clearItemFromCart,
        removeItemFromToCart,
        cartItems,
        cartCount,
        cartTotal
    };
    return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>)
}