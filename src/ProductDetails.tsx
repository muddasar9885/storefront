import React, { useContext } from 'react';
import { StoreContext } from './StoreContext';

const ProductDetails: React.FC = () => {
  const { products, selectedProduct } = useContext(StoreContext);

  const product = products.find((product: { id: number; }) => product.id == selectedProduct);

  console.log('selectedProduct', selectedProduct, product);
  if (!product) {
    return null;
  }

  return (
    <>
      {selectedProduct ?
        <div>
          <h2>{product.title}</h2>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating.rate}</p>
          <p>Description: {product.description}</p>
        </div>
        : null}

    </>
  );
};

export default ProductDetails;
