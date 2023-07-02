import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ProductData, ProductProps } from '../../../types/types';
import { Item } from './Item';

interface ItemListProps {
  products: ProductData;
}

export const ItemList: React.FC<ItemListProps> = ({ products }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <h2>Productos</h2>
      <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Object.entries(products).map(([brand, brandProducts]) =>
  brandProducts.map((product: ProductProps) => (
    <Grid key={product.id} item xs={2} sm={4} md={4}>
              <Item
                id={product.id}
                title={product.title}
                price={product.price}
                srcImg={product.srcImg}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};