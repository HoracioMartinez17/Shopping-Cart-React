import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Brand, ProductProps } from '../../../types/types';
import { fetchProducts, getForBrand } from '../../../funtionsUtils/funtionsUtilis';
import { ItemList } from './Itemlist';

interface ItemListContainerProps {}

export const ItemListContainer: React.FC<ItemListContainerProps> = React.memo(() => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { brand } = useParams<{ brand: string }>();

  const fetchProductsData = async () => {
    try {
      const data: Brand[] = await fetchProducts();

      if (brand) {
        const brandProducts = await getForBrand(brand);
        setProducts(brandProducts);
      } else {
        setProducts(data.flatMap(item => item.products));
      }
    } catch (error) {
      setError("Error fetching products");
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProductsData();
    console.log("ItemListContainer montado");
  }, []); // No se especifica ninguna dependencia, lo que significa que solo se ejecutará una vez al montar el componente

  useEffect(() => {
    if (brand) {
      fetchProductsData();
      console.log("ItemListContainer montado brand");
    }
  }, [brand]); // Se ejecutará solo cuando cambie el valor de 'brand'

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <ItemList products={products} />;
});

