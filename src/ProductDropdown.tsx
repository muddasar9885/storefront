import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from './StoreContext';

import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputLabel, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


interface Product {
  id: number;
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  },
  category: string;
}
const ProductDropdown: React.FC = () => {
  const { products, selectedProduct, setSelectedProduct, clearProducts, selectedCategory } = useContext(StoreContext);

  const [filteredProducts, setFilterProducts] = useState(products);
  const handleCategoryChange = (event: SelectChangeEvent) => {
    console.log('here', event.target.value);
    setSelectedProduct(event.target.value);
  };

  useEffect(() => {
    const filterProduct = products.filter((product: Product) => product.category === selectedCategory)
    setFilterProducts(filterProduct);
  }, [selectedCategory])

  return (
    <div style={{ display: 'flex',  alignItems: 'center'}}>
      <FormControl sx={{ m: 1, width: 150 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Products</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={selectedProduct}
          onChange={handleCategoryChange}
          autoWidth
          label="Products"
        >
          {filteredProducts.map((product: Product, index: number) => (
            <MenuItem key={index} value={product.id}>
              {product.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="outlined" onClick={clearProducts} startIcon={<CloseIcon />}/>
    </div>
  );
};

export default ProductDropdown;
