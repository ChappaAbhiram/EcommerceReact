import React, { useContext, useState, useEffect } from 'react';
import AuthContext from './AuthContext';

const CartContext = React.createContext({
  cart: [],
  addToCart: (product) => {},
  removeFromCart: (index) => {},
  fetchCartData: () => {}, // Add the fetchCartData function
});

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const authCtx = useContext(AuthContext);
  const user = authCtx.user;

  // Function to fetch cart data from the backend
  const fetchCartData = async () => {
    if(user){
    const sanitizedEmail = user.replace(/[.@]/g, ''); // Remove '.' and '@' from email
    const cartApiUrl = `https://crudcrud.com/api/9498cd03421f4ff5bdff45fd2091bb14/cart${sanitizedEmail}`;

    try {
      const response = await fetch(cartApiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch cart data.');
      }

      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  }
};

  // Call fetchCartData when the component mounts
  useEffect(() => {
    fetchCartData();
  }, [user]);

  const addToCart = (product) => {
    const sanitizedEmail = user.replace(/[.@]/g, '');
  
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);
  
    if (existingProduct) {
  
      const cartApiUrl = `https://crudcrud.com/api/9498cd03421f4ff5bdff45fd2091bb14/cart${sanitizedEmail}/${existingProduct._id}`;
  
      // Send a PUT request to update the quantity of the existing product
      fetch(cartApiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: existingProduct.id,
          title: existingProduct.title,
          price: existingProduct.price,
          imageUrl: existingProduct.imageUrl,
          quantity: existingProduct.quantity + 1,
        }),
      })
        .then(async (response) => {
          if (!response.ok) {
            throw new Error('Failed to update item quantity in the cart.');
          }
  
          // Check if the response contains data before parsing it
            try {
              // Attempt to parse the response data as JSON
              // const responseData = await response.json()
              console.log('Cart data updated in the backend:',response);
              // After successfully updating the cart, fetch the updated data
              fetchCartData();
            } catch (error) {
              console.warn('Error parsing JSON response:', error);
            }
          } )
        .catch((error) => {
          console.error('Error updating item quantity in the cart:', error);
        });
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      const updatedProduct = { ...product, quantity: 1 };
      const cartApiUrl = `https://crudcrud.com/api/9498cd03421f4ff5bdff45fd2091bb14/cart${sanitizedEmail}`;
  
      // Send a POST request to add the product to the cart
      fetch(cartApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      })
        .then(async (response) => {
          if (!response.ok) {
            throw new Error('Failed to add item to the cart.');
          }
  
          // Check if the response contains data before parsing it
            try {
              // Attempt to parse the response data as JSON
              const responseData = await response.json();
              console.log('Cart data updated in the backend:', responseData);
              // After successfully updating the cart, fetch the updated data
              fetchCartData();
            } catch (error) {
              console.warn('Error parsing JSON response:', error);
            }
          }
        )
        .catch((error) => {
          console.error('Error adding item to the cart:', error);
        });
    }
  };  
  
  const removeFromCart = (id) => {
    console.log(id);
    const sanitizedEmail = user.replace(/[.@]/g, ''); // Remove '.' and '@' from email
    const cartApiUrl = `https://crudcrud.com/api/9498cd03421f4ff5bdff45fd2091bb14/cart${sanitizedEmail}/${id}`;
    fetch(cartApiUrl ,{
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to remove item from the cart.');
        }
        // Handle success, e.g., update the cart data
        fetchCartData();
      })
      .catch((error) => {
        console.error('Error removing item from the cart:', error);
      });
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, fetchCartData }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;



