import { Brand } from "../types/types";

const url = "http://localhost:3000/products";

export const fetchProducts = async (): Promise<Brand[]> => {
  try {
    // Realizamos una solicitud HTTP para obtener los datos de productos de la API
    const response = await fetch(url);
    const data: Brand[] = await response.json();

    return data; // Devolvemos los datos de productos obtenidos de la API
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};