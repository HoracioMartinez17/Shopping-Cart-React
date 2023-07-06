import { useEffect, useState } from "react";
import { ProductDetailsProps, Brand, ProductData } from "../../types/types";
import { ItemDetails } from "./ItemDetails";
import { getProductById } from "../..";


export const ItemsDetailsContainer = ({ id }: ProductDetailsProps) => {
	const [item, setItem] = useState<ProductData | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchItem = async () => {
			try {
				const result: Brand[] = await getProductById(id);
				const productData: ProductData = {
					products: result,
					id: result[0].products[0].id,
					title: result[0].products[0].title,
					description: result[0].products[0].description,
					stock: result[0].products[0].stock,
					price: result[0].products[0].price,
					srcImg: result[0].products[0].srcImg,
					quantity: 1,
				};
				setItem(productData);
			} catch (error) {
				console.error("Error fetching product:", error);
				setError("Error fetching product");
			}
		};

		fetchItem();
	}, [id]);

	if (item === null && error === null) {
		return <div>Loading...</div>;
	}

	if (error !== null) {
		return <div>Error: {error}</div>;
	}

	return <ItemDetails item={item!} />;
};
