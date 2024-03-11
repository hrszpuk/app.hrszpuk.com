import React from 'react';
import productsData from "../productsData";
import './Products.css';

function Products() {
  return (
    <div className='products-gallery'>
        {productsData.map(product => (
            <div key={product.id} className='product-item'>
                <img src={product.imageUrl} alt={product.title + ' image'} className="product-image" />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
        ))}
    </div>
  );
}

export default Products;