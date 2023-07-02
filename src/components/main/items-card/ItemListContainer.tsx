import  { useState, useEffect } from "react";
import { ProductData } from '../../../types/types';
import { fetchProducts } from "../../../funtionsUtils/funtionsUtilis";
import { ItemList } from ".";

export const ItemListContainer = () => {
	const [products, setProducts] = useState<ProductData>({ nike: [], adidas: [] });

  const fetchProductsData = async () => {
    const data: ProductData = await fetchProducts();
    setProducts(data);
  };

  useEffect(() => {
fetchProductsData();
  }, []);

  return <ItemList products={products} />;
};
