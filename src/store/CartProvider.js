import React from 'react';
import {useState,useEffect} from 'react';
const CartContext = React.createContext({
addtocart : (product)=>{},
removefromcart:(index)=>{},
Cart : []
})
export const CartProvider = (props)=>{
    const [Cart,setCart]=useState([]);
    useEffect(() => {
      const savedCart = JSON.parse(localStorage.getItem('cart'));
      if (savedCart) {
        setCart(savedCart);
      }
    }, []);
    const addtocart = (product) => {
      const existingProductIndex = Cart.findIndex((item) => item.title === product.title);
    
      if (existingProductIndex !== -1) {
        // Product already exists in the cart, update quantity
        const updatedCart = Cart.map((item, index) => {
          if (index === existingProductIndex) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
    
        // Update cart state and local storage
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      } else {
        // Product doesn't exist in the cart, add it
        const updatedCart = [...Cart, { ...product, quantity: 1 }];
    
        // Update cart state and local storage
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
    };
    const removefromcart = (index) => {
      // Filter the cart to exclude the item at the specified index
      const updatedCart = Cart.filter((_, i) => i !== index);
    
      // Update cart state
      setCart(updatedCart);
    
      // Update local storage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
    return (
    <CartContext.Provider value={{Cart,addtocart,removefromcart}}>
        {props.children}
        </CartContext.Provider>
        )
}
export default CartContext;

