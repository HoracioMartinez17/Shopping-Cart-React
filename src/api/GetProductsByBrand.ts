
import { ProductProps, Brand } from "../types/types";
import { fetchProducts } from "./FetchProducts";

 export const getProductsByBrand = async (brand: string): Promise<ProductProps[]> => {
    try {
      const productData: Brand[] = await fetchProducts();
      const filteredProducts: ProductProps[] = [];
  
      // Filtramos los productos por marca
      for (const brandData of productData) {
        if (brandData.brand === brand) {
          // Agregamos los productos de la marca filtrada a la lista de productos filtrados
          filteredProducts.push(...brandData.products);
        }
      }
  
      return filteredProducts;
    } catch (error) {
      console.error("Error retrieving products:", error);
      throw error;
    }
  };