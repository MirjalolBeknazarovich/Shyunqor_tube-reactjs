import React from 'react';
import { Stack } from '@mui/material';
import { category } from '../constants/index'
import { colors } from '../constants/colors'
import './category.css';

const Category = ({selectedCategoryHendler,  selectedCategory}) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: 'scroll', p: 2 }}>
        {
            category.map( item => (
                <button key={item.name} className="category_btn" style={{borderRadius: "0", background: item.name === selectedCategory && colors.secondary, color: item.name === selectedCategory && '#fff'}} onClick={() => selectedCategoryHendler(item.name)}>
                    <span style={{color: item.name === selectedCategory ? "#fff" : colors.secondary, marginRight: '15px' }}>{item.icon}</span>
                    <span style={{ opacity: '1' }}>{item.name}</span>
                </button>
            ))
        }
    </Stack>
  )
}

export default Category