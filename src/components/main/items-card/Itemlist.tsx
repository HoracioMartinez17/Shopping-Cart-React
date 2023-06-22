import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import {ProductProps} from "../../../types/types"
import { Item } from './Item';

  
  export const ItemList = ({ products }: { products: ProductProps[] }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <h2>Productos</h2>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {products.map((product) => ( 
          <Grid xs={2} sm={4} md={4} key={product.id}>
            <Item product={product} key={product.id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
      }
     