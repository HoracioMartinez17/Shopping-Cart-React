import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ProductProps } from '../../../types/types';
import { Item } from './Item';
import './itemCartStyles.css';

interface ItemListProps {
  products: ProductProps[];
  title: string
}

export const ItemList: React.FC<ItemListProps> = ({ products, title }) => {
  return (
    <div className='contenedor'>
    <Box sx={{ flexGrow: 1 }}>
      <h2 className = "title-products">Products {title}</h2>
      <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map((product: ProductProps) => (
          <Grid key={product.id} item xs={2} sm={4} md={4}>
            <Item
              id={product.id}
              title={product.title}
              price={product.price}
              srcImg={product.srcImg}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  );
};
