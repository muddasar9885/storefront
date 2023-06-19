import React, { useContext } from 'react';
import CategoryDropdown from './CategoryDropdown';
import ProductBarChart from './ProductBarChart';
import ProductTable from './ProductTable';
import ProductDetails from './ProductDetails';
import StoreProvider, { StoreContext } from './StoreContext';
import ProductDropdown from './ProductDropdown';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <div style={{ display: 'flex', justifyContent: 'center', background: 'black'}}>
          <h1 style={{color: 'white'}}> My Fab Store</h1>
      </div>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row', margin: 16 }}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <CategoryDropdown />
          <ProductDropdown />
        </div>
        <div style={{ display: 'flex', flex: 0.8, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 16}}>
          <ProductBarChart />
          <ProductTable />
          <ProductDetails />
        </div>
      </div>
    </StoreProvider>
  );
};

export default App;
