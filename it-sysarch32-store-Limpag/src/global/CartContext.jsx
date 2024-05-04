import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

import CartReducer from './CartReducer'; // Import CartReducer without destructuring

export const CartContext = createContext();

const CartContextProvider = (props) =>{
    const [cart, dispatch] = useReducer(CartReducer, { shoppingCart: [], totalPrice: 0, totalQty: 0 });

    return (
        <CartContext.Provider value={{ ...cart, dispatch }}>
            {props.children}    
        </CartContext.Provider>
    );
}


CartContextProvider.propTypes = {
    children: PropTypes.node
};

export default CartContextProvider;
