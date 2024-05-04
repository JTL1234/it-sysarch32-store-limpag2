import React, { useContext } from 'react';
import { ProductContext } from '../global/ProductsContext'; 
import { CartContext } from '../global/CartContext';

const Products = () => {
  const { products } = useContext(ProductContext);
  const {dispatch} = useContext(CartContext);
  return (
    <>
    {products.length !== 0 && <h1 className='title'>Coffee Product</h1>}
    <div className='products-container'>
        {products.length === 0 && <div>slow internet...no products to display</div>}
        {products.map(product => (
    <div className='product-card' key={product.ProductID}>
        <div className='product-img'>
            <img src={product.ProductImg} alt="not found" />
        </div>
        <div className='product-name'>
            {product.ProductName}
        </div>
        <div className='product-price'>
            Rs {product.ProductPrice}.00
        </div>
        <div className='product-price'>
            {product.ProductDescription} 
        </div>
        <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
    </div>
        ))}
    </div>
</>
  )
}

export default Products;
