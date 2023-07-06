import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Brand, ProductProps } from "../../types/types";

import { ItemList } from "./Itemlist";
import { capitalizeTitle, fetchProducts, getProductsByBrand } from "../..";

interface ItemListContainerProps {}

export const ItemListContainer: React.FC<ItemListContainerProps> = () => {
	const [products, setProducts] = useState<ProductProps[]>([]);
	const [title, setTitle] = useState("");
	const [error, setError] = useState<string | null>(null);
	const { brand } = useParams<{ brand: string }>();

	const fetchProductsData = async () => {
		try {
			const data: Brand[] = await fetchProducts();

			if (brand) {
				const brandProducts = await getProductsByBrand(brand);
				setProducts(brandProducts);
				const capitalizedTitle = capitalizeTitle(brand);
				setTitle(capitalizedTitle);
			} else {
				setProducts(data.flatMap((item) => item.products));
				setTitle("");
			}
		} catch (error) {
			setError("Error fetching products");
			console.error("Error fetching products:", error);
		}
	};

	useEffect(() => {
		fetchProductsData();
	}, [brand]); // Se ejecutará solo cuando cambie el valor de 'brand'

	if (error) {
		return <div>Error: {error}</div>;
	}

	return <ItemList products={products} title={title} />;
};
