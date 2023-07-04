import products from "../../src/db.json/products.json";
import { ProductProps, ProductData, Brand} from "../types/types";


export const getProductById = async (id: string): Promise<Brand[]> => {
  try {
    const productData: ProductData = products;
    const foundProducts: Brand[] = [];

    // Recorrer cada marca de productos
    for (const brand of productData.products) {
      // Buscar el producto correspondiente al ID dado
      const foundProduct = brand.products.find((product: ProductProps) => product.id === id);
      if (foundProduct) {
        foundProducts.push({ brand: brand.brand, products: [foundProduct] });
      }
    }

    if (foundProducts.length === 0) {
      throw new Error("Product not found");
    }

    return foundProducts;
  } catch (error) {
    console.error("Error retrieving product:", error);
    throw new Error("Error retrieving product");
  }
};


export const getProductsByBrand = async (brand: string): Promise<ProductProps[]> => {
  try {
    // Obtener los datos de productos mediante una llamada a la función fetchProducts
    const productData: Brand[] = await fetchProducts();
    const filteredProducts: ProductProps[] = [];

    // Filtrar los productos por marca
    for (const brandData of productData) {
      if (brandData.brand === brand) {
        filteredProducts.push(...brandData.products);
      }
    }

    return filteredProducts; // Devolver los productos filtrados
  } catch (error) {
    console.error("Error retrieving products:", error);
    throw error; // Relanzar el error o manejarlo según sea necesario
  }
};
const url= "http://localhost:3000/products"
// api.js
export const fetchProducts = async (): Promise<Brand[]> => {
  try {
    const response = await fetch(url);
    const data: Brand[] = await response.json();
    return data; // Devolver los datos de productos obtenidos de la API
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Relanzar el error o manejarlo según sea necesario
  }
};

//function para poner en mayuscula la primera letra del texto
export const capitalizeTitle = (title: string): string => {
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

