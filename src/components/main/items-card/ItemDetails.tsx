import { useEffect, useState } from "react";
import { ProductProps } from "../../../types/types";
import { getForItemId } from "../../../funtionsUtils/funtionsUtilis";
import {Card,CardActions,CardContent,CardMedia,Button,IconButton, Typography,} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";


export const ItemDetails =({ itemId }: { itemId: string }) => {
  const [product, setProduct] = useState<ProductProps | { error: string } | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await getForItemId(itemId);
        setProduct(result);
      } catch (error) {
        setProduct({ error: "No se pudo obtener el producto" });
      }
    };

    fetchProduct();
  }, [itemId]);

  if (!product) {
    return <div>Loading...</div>;
  } 

  if ("error" in product) {
    return <div>{product.error}</div>;
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="green iguana" height="140" image={product.srcImg} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Button>
        <IconButton color="success" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
