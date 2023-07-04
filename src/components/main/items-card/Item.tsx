import React from 'react';
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface ItemProps {
  id: string;
  title: string;
  price: number;
  srcImg: string[];
}

export const Item: React.FC<ItemProps> = ({ id, title, price, srcImg }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="green iguana" height="140" image={srcImg} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Button>
        <IconButton color="success" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
        <Link to={`/item/${id}`}>Ver más</Link>
      </CardActions>
    </Card>
  );
};
