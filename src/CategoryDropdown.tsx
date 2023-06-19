import React, { useContext } from 'react';
import { StoreContext } from './StoreContext';

import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputLabel, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Category {
  id: number;
  name: string;
}

const CategoryDropdown: React.FC = () => {
  const { categories, selectedCategory, setSelectedCategory, clearFilters, clearProducts } = useContext(StoreContext);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
    clearProducts();
  };

  return (
    <div style={{ display: 'flex',  alignItems: 'center'}}>
      <FormControl sx={{ m: 1, width: 150  }}>
        <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
        <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={selectedCategory}
            onChange={handleCategoryChange}
            autoWidth
            label="Age"
          >
            {categories.map((category: string, index: number) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="outlined" onClick={clearFilters} startIcon={<CloseIcon />}/>
    </div>
  );
};

export default CategoryDropdown;
