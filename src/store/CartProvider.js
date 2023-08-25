import React from 'react';
import {useState} from 'react';
const CartContext = React.createContext({
addtocart : (product)=>{},
removefromcart:(index)=>{},
Cart : []
})
export const CartProvider = (props)=>{
    const [Cart,setCart]=useState([]);
    const addtocart=(product)=>{
        const existingProductIndex = Cart.findIndex((item) => item.title === product.title);
        if (existingProductIndex !== -1){
            const updatedCart = Cart.map((item, index) => {
                if (index === existingProductIndex) {
                  return { ...item, quantity: item.quantity + 1 };
                }
                return item;
              });
              setCart(updatedCart);
            }
              else {
                setCart((prevcart) => [...prevcart, { ...product, quantity: 1 }]);
              }
            };
        const removefromcart=(index)=>{
            setCart((prevcart)=>prevcart.filter((item,i)=>index!==i))
        }
    return (
    <CartContext.Provider value={{Cart,addtocart,removefromcart}}>
        {props.children}
        </CartContext.Provider>
        )
}
export default CartContext;

