import products from "../../src/db.json/products.json";
import { ProductProps, ProductData } from "../types/types";

export const getForItemId = async (id: string): Promise<ProductProps | { error: string }> => {
  const allProducts =  Object.values(products); // Fetch the products data
  const itemList = Object.values(allProducts).flat();

  const index = itemList.findIndex((product) => product.id === id);

  if (index !== -1) {
    return itemList[index];
  } else {
    throw { error: "No existe el producto" };
  }
};



// api.js
export const fetchProducts = async (): Promise<ProductData> => {
  const response = await fetch("src/db.json/products.json");
  const data: ProductData = await response.json();
  return data;
};
