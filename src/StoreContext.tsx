import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const StoreContext = createContext<any>(null);

const StoreProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [yAxis, setYAxis] = useState('price');

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedProduct('');
  };

  const clearProducts = () => {
    setSelectedProduct('');
  };
  const fetchCategories = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products/categories');
    setCategories(data);
  };

  const fetchProducts = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    setProducts(data);
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        categories,
        products,
        selectedCategory,
        setSelectedCategory,
        selectedProduct,
        setSelectedProduct,
        yAxis,
        setYAxis,
        clearFilters,
        clearProducts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
