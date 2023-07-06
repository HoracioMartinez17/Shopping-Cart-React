import { ProductProps, Brand } from "../types/types";
import { fetchProducts } from "./FetchProducts";

export const getProductById = async (id: string): Promise<Brand[]> => {
    try {
      const productData: Brand[] = await fetchProducts();
  
      const foundProducts: Brand[] = [];
  
      // Recorremos cada marca de productos
      for (const brand of productData) {
        // Buscamos el producto correspondiente al ID dado
        const foundProduct = brand.products.find((product: ProductProps) => product.id === id);
        if (foundProduct) {
          // Agregamos el producto encontrado a la lista de productos encontrados
          foundProducts.push({ brand: brand.brand, products: [foundProduct] });
        }
      }
  
      if (foundProducts.length === 0) {
        throw new Error("Product not found");
      }
  
      return foundProducts;
    } catch (error) {
      console.error("Error retrieving product:", error);
      throw error;
    }
  };
  