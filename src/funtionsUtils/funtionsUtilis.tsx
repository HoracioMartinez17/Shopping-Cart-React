import products from "../../src/db.json/products.json";
import { ProductProps, ProductData, Brand} from "../types/types";

export const getForItemId = async (id: string): Promise<ProductProps | { error: string }> => {
  const productData: ProductData = products;

  for (const brand of productData.products) {
    const foundProduct = brand.products.find(product => product.id === id);
    if (foundProduct) {
      return foundProduct;
    }
  }

  throw { error: 'No existe el producto' };
};

export const getForBrand = async (brand: string): Promise<ProductProps[]> => {
  try {
    const productData: Brand[] = await fetchProducts();
    const filteredProducts: ProductProps[] = [];

    for (const brandData of productData) {
      if (brandData.brand === brand) {
        filteredProducts.push(...brandData.products);
      }
    }

    return filteredProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // rethrow the error or handle it accordingly
  }
};



// api.js
export const fetchProducts = async (): Promise<Brand[]> => {
  const response = await fetch("http://localhost:3000/products");
  const data: Brand[] = await response.json();
  return data;
};

