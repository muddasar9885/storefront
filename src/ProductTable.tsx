import React, { useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { StoreContext } from './StoreContext';

interface Product {
  id: number;
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  }
}
const ProductTable: React.FC = () => {
  const { products, selectedCategory, selectedProduct } = useContext(StoreContext);

  const categoryProducts = selectedCategory ? products.filter((product: { category: any; }) => product.category === selectedCategory) : [];
  console.log('selected', selectedCategory, categoryProducts);

  return (
    <>
      {selectedCategory && !selectedProduct ? (<TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categoryProducts.map((product: Product) => (
              <TableRow key={product.id}>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.rating.rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>) : null}
    </>
  );
};

export default ProductTable;
