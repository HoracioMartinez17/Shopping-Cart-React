import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { ProductProps } from "../../../types/types";
import { ItemsDetailsContainer } from "./ItemsDetailsContainer";


export const Item = ({ product }: { product: ProductProps }) => {
	const [showItemDetails, setShowItemDetails] = useState(false);

	const handleClick = () => {
		setShowItemDetails(true);
	};
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				alt="green iguana"
				height="140"
				image={product.srcImg}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{product.title}
				</Typography>
				{/* <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography> */}
			</CardContent>
			<CardActions>
				<Button size="medium">
					{product.price.toLocaleString("en-US", {
						style: "currency",
						currency: "USD",
					})}
				</Button>
				<IconButton
					onClick={handleClick}
					color="success"
					aria-label="add to shopping cart">
					<AddShoppingCartIcon />
				</IconButton>
			</CardActions>
			{showItemDetails && <ItemsDetailsContainer itemId={product.id} />}{" "}
			{/* Renderiza los detalles del item si showItemDetails es true */}
		</Card>
	);
};
