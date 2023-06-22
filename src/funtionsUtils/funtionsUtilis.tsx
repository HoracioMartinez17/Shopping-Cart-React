import { products } from "../data/products";
import { ProductProps } from "../types/types";

export const getForItemId = (
	itemId: number
): ProductProps | { error: string } => {
	const item = products.find((product) => product.id === itemId);
	if (item) {
		return item;
	}
	return { error: "No existe el producto" };
};
