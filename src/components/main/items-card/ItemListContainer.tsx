import { products } from "../../../data/products";
import { ItemList } from "./Itemlist";

export const ItemListContainer = () => {
	return (
		<div className="dispaly-flex">
			<ItemList products={products} />
		</div>
	);
};
